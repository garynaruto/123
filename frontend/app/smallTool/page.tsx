'use client';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export default function Home() {
    return (
        <div style={{marginTop:'30px', marginLeft:'20px'}}>
        <span className="p-float-label" >
            <InputText id="username" />
            <label htmlFor="username">Username</label>
        </span>
            <InputTextarea style={{marginTop:'30px'}} rows={5} cols={30}></InputTextarea>
        </div>
    )
}