// src/pages/GalleryForm.js

import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function GalleryForm() {

    const dropZone = useRef()
    const imageInput = useRef()
    const [imageData, setImageData] = useState([])

    const dropZoneStyle = {
        minHeight:"300px",
        border:"3px solid #cecece",
        borderRadius:"10px",
        display:"flex",
        justfyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        flexWrap:"wrap",
        rowGap:"10px",
        columnGap:"10px"
    }

    const selectedStyle={
        width:"200px",
        borderRadius:"10px"
    }

    const handleDrop = (e)=>{
        e.preventDefault()

        //drop 된 파일의 정보가 들어 있는 배열 얻어내기
        const files = e.dataTransfer.files;

        //이미지 파일만 담을 배열
        const imageFiles=[];

        //javascript 반복문
        for(let i=0; i<files.length; i++){
            //i번째 File 객체
            const tmp = files[i];
            //이미지 파일인지 여부를 알아내서 이미지 파일이 아니면 동작하지 않도록 설정
            const reg=/image/;
            
        }
    }
    return (
        <>
            <h1>이미지 업로드 폼</h1>
            <Form.Group className="mb-3" controlId="caption">
                <Form.Label>설명</Form.Label>
                <Form.Control type="text" name="caption" placeholder="설명 입력..."/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
                <Form.Label>이미지</Form.Label>
                <Form.Control ref={imageInput} type="file" name="image" accept="image/*" multiple/>
            </Form.Group>
            <div ref={dropZone} onDragOver={(e)=>e.preventDefault()}
                onDrop={handleDrop} style={dropZoneStyle} className="mb-3">
                {
                    imageData.map(item=><img style={selectedStyle} key={item.name} src={item.dataUrl} alt={item.name}/>)
                }
            </div>
            <Button variant="success">업로드</Button>


            <form action="" id="uploadForm" method="post" encType="multipart/form-data">
                <div class="mb-3">
                    <label class="form-label" for="caption">설명</label>
                    <input class="form-control" type="text" name="caption" id="caption" />
                </div>
                <div class="mb-3">
                    <label for="image">이미지</label>
                    <input type="file" name="images" id="image" accept="image/*" multiple/>
                </div>
                <div class="drop-zone mb-2">
                Drag, Drop! or Click!
                </div>
                <button class="btn btn-outline-success btn-sm" type="submit">업로드</button>
            </form>
        </>
    );
}

export default GalleryForm;