import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";
const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    console.log(file)
    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://i.imgur.com/2zLfMh6.jpeg"}
                            alt=""
                            className="img"
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">Hình ảnh: <DriveFolderUploadOutlinedIcon className="icon" /></label>
                                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>

                            <div className="formInput">

                            </div>
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input type={input.type} placeholder={input.placeholder} />
                                </div>
                            ))}


                            <button>Thêm mới</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;