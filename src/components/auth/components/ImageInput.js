import React from "react";
import Fab from "@mui/material/Fab";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function ImageInput(props) {
    return (
        <>
            <label htmlFor="upload-photo">
                <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={(e) => {
                        props.setFile(e.target.files[0]);
                        // console.log(e.target.files[0]);
                    }}
                />

                <Fab
                    color="primary"
                    component="span"
                    aria-label="add"
                    variant="extended"
                    style={{ width: "100%" }}
                >
                    {!props.file.name && <AddCircleIcon />}
                    {props.file.name ? props.file.name : "Upload CNIC PDF"}
                </Fab>
            </label>
        </>
    );
}

export default ImageInput;
