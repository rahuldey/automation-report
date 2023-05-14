import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import UploadForm from '../components/UploadForm';
import DisplayTable from '../components/DisplayTable';

export default function Landing() {
  const [tableData, setTableData] = useState(null);
  const onUploadHandler = (data) => {
    setTableData(data);
  };
  return (
    <Container fluid className="d-grid gap-4">
      <UploadForm onUploadHandler={onUploadHandler} />
      {tableData && <DisplayTable data={tableData} />}
    </Container>
  );
}
