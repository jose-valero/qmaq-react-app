import React, { Component } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import '../assets/styles/home.css';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.onUpload = this.onUpload.bind(this);
    this.onBasicUpload = this.onBasicUpload.bind(this);
  }

  onUpload() {
    this.toast.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  onBasicUpload() {
    this.toast.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded with Basic Mode',
    });
  }

  render() {
    return (
      <div className="grid pt-2 align-center">
        <div className="col shadow-5 m-2 bg-warning">
          <Toast
            ref={(el) => {
              this.toast = el;
            }}
          ></Toast>
          <div className="mx-6 my-4 p-5 ">
            <h6 className="text-bold">Subir archivos de Aduana.</h6>

            <FileUpload
              mode="basic"
              name="total"
              url="http://localhost:8080/maquinaria/excel/aduana"
              accept=".csv"
              maxFileSize={1000000}
              onUpload={this.onBasicUpload}
              chooseLabel="Archivo Aduana"
              type="file"
              class="mt-3 bg-warning"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
