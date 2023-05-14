import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import Title from '../Title';

export default function DisplayTable(props) {
  const tableData = useMemo(() => {
    const dataMap = props.data.reduce((dataMap, row) => {
      const { Project: project, IsAutomated: isAutomated } = row;
      if (project === '') return dataMap;

      if (!dataMap[project]) {
        dataMap[project] = {
          automated: 0,
          nonAutomated: 0,
        };
      }

      dataMap[project]['automated'] +=
        isAutomated === 'Y' || isAutomated === 'y' ? 1 : 0;
      dataMap[project]['nonAutomated'] +=
        isAutomated === 'N' || isAutomated === 'n' ? 1 : 0;
      return dataMap;
    }, {});
    return Object.keys(dataMap).map((key) => ({
      Project: key,
      Automated: dataMap[key].automated,
      'Non Automated': dataMap[key].nonAutomated,
    }));
  }, [props.data]);

  return (
    tableData && (
      <div>
        <Title title="Summary" />
        <Table striped bordered hover>
          <thead>
            <tr>
              {tableData[0] &&
                Object.keys(tableData[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={`${rowIndex}-${colIndex}`}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  );
}

DisplayTable.propTypes = {
  data: PropTypes.any,
};
