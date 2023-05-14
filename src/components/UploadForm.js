import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Papa from 'papaparse';
import PropTypes from 'prop-types';

export default function UploadForm(props) {
  const [csvData, setCsvData] = useState(null);
  const uploadElement = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.onUploadHandler(csvData);
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file.type !== 'text/csv') {
      electron.notification('Can only process csv files');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      Papa.parse(reader.result, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setCsvData(results.data);
        },
      }).data;
    };
    reader.readAsText(file);
  };

  return (
    <Container fluid onSubmit={onSubmitHandler}>
      <Form className="mt-3">
        <Form.Group
          className="mb-3"
          controlId="formCsvUpload"
          onChange={onFileChange}
        >
          <Form.Control type="file" accept=".csv" ref={uploadElement} />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Calculate
          </Button>
          {csvData && (
            <Button
              variant="secondary"
              onClick={() => {
                uploadElement.current.value = null;
                setCsvData(undefined);
                props.onUploadHandler(undefined);
              }}
            >
              Clear
            </Button>
          )}
        </div>
      </Form>
    </Container>
  );
}

UploadForm.propTypes = {
  onUploadHandler: PropTypes.func,
};
