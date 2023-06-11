import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 50,
    p: 4,
};

export default function AddBlogModal({
    handleClose,
    open,
    title,
    setTitle,
    subtitle,
    setSubtitle,
    author,
    setAuthor,
    handleSubmit,
    modalInfo,
    titleError,
    subtitleError,
    authorError,
}) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ marginBottom: 2 }}
                    >
                        {modalInfo.header}
                    </Typography>
                    <Box>
                        <FormControl fullWidth variant="outlined">
                            <TextField
                                id="outlined-basic"
                                label="Title"
                                variant="outlined"
                                size="small"
                                value={title}
                                sx={{ my: 1 }}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                                error={titleError}
                            />
                        </FormControl>
                        <FormControl fullWidth variant="outlined">
                            <TextField
                                id="outlined-basic"
                                label="Subtitle"
                                variant="outlined"
                                size="small"
                                sx={{ my: 1 }}
                                value={subtitle}
                                onChange={(e) => {
                                    setSubtitle(e.target.value);
                                }}
                                error={subtitleError}
                            />
                        </FormControl>
                        <FormControl variant="outlined">
                            <TextField
                                id="outlined-basic"
                                label="Author"
                                variant="outlined"
                                size="small"
                                sx={{ my: 1 }}
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                error={authorError}
                            />
                        </FormControl>

                        <Button
                            variant="contained"
                            sx={{
                                my: 1,
                                float: "right",
                                width: "150px",
                                height: "40px",
                            }}
                            onClick={handleSubmit}
                        >
                            {modalInfo.button}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
