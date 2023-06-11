import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Snackbar } from "@mui/material";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddBlogModal from "./auth/components/AddBlogModal";
import SnackBar from "./shared/SnackBar";

const rows = [
    {
        id: makeid(8),
        title: "1 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
    {
        id: makeid(8),
        title: "2 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
    {
        id: makeid(8),
        title: "3 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
    {
        id: makeid(8),
        title: "4 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
    {
        id: makeid(8),
        title: "5 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
    {
        id: makeid(8),
        title: "6 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
    {
        id: makeid(8),
        title: "7 Politics Explained in Fewer than 140 Characters",
        subtitle: "Politics Explained in Fewer than 140 Characters",
        author: "A B C D",
    },
];
function makeid(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
    }
    return result;
}

export default function Blog() {
    const handleSubmit = (event) => {
        event.preventDefault();
        setTitleError(false);
        setSubtitleError(false);
        setAuthorError(false);
        console.log("Submit", title, subtitle, author);
        if (validateInputFields()) {
            if (UpdateBlog_id !== "") {
                storeBlog(UpdateBlog_id);
                setUpdateBlog_id("");
                setSnackMessage("Blog updated successfully.");
            } else {
                storeBlog();
                setSnackMessage("Blog added successfully.");
            }
            handleClose();
            setSnackType("success");
            setSnackState(true);
        }
    };

    const editHandler = (id) => {
        handleOpen();
        setUpdateBlog_id(id);
        const current_blog = blogs[findBlogIndex(id)];
        findBlogIndex(id);
        console.log(current_blog);
        setTitle(current_blog.title);
        setSubtitle(current_blog.subtitle);
        setAuthor(current_blog.author);
        setModalInfo({
            header: "EDIT BLOG",
            button: "Update",
        });

        // setButtonAction("Update");
    };
    const deleteHandler = (id) => {
        console.log("Delete");
        const updatedBlogs = blogs.filter((tbd) => {
            return id != tbd.id;
        });
        setBlogs(updatedBlogs);
        setSnackMessage("Blog deleted successfully.");
        setSnackType("error");
        setSnackState(true);
    };
    const findBlogIndex = (id) => {
        const index = blogs.findIndex((el) => el.id === id);
        return index;
    };
    const validateInputFields = () => {
        if (title === "") {
            setTitleError(true);
        }
        if (subtitle === "") {
            setSubtitleError(true);
        }
        if (author === "") {
            setAuthorError(true);
        }
        if (title === "" || subtitle === "" || author === "") {
            setSnackMessage("All fields required.");
            setSnackType("error");
            setSnackState(true);
            return false;
        } else {
            return true;
        }
    };
    const storeBlog = (id = null) => {
        if (id === null) {
            console.log("Test id null");
            const newBlog = {
                id: makeid(8),
                title: title,
                subtitle: subtitle,
                author: author,
            };
            setBlogs([...blogs, newBlog]);
        } else {
            console.log("Test id not null");

            let current_blogs = blogs;
            current_blogs[findBlogIndex(id)] = {
                id: id,
                title: title,
                subtitle: subtitle,
                author: author,
            };
            setBlogs(current_blogs);
        }
        setTitle("");
        setSubtitle("");
        setAuthor("");
    };

    const [open, setOpen] = React.useState(false);
    const [blogs, setBlogs] = React.useState(rows);
    const handleOpen = () => {
        setOpen(true);
        setModalInfo({
            header: "ADD NEW BLOG",
            button: "Add",
        });
    };
    const handleClose = () => {
        setOpen(false);
        setTitle("");
        setSubtitle("");
        setAuthor("");
    };
    const [title, setTitle] = React.useState("");
    const [titleError, setTitleError] = React.useState(false);
    const [subtitle, setSubtitle] = React.useState("");
    const [subtitleError, setSubtitleError] = React.useState(false);
    const [author, setAuthor] = React.useState("");
    const [authorError, setAuthorError] = React.useState(false);
    const [UpdateBlog_id, setUpdateBlog_id] = React.useState("");
    const [snackState, setSnackState] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");
    const [modalInfo, setModalInfo] = React.useState({
        button: "Add",
        header: "ADD NEW BLOG",
    });

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box>
                <Fab
                    color="primary"
                    component="span"
                    aria-label="add"
                    variant="extended"
                    style={{
                        width: "15%",
                        float: "right",
                        right: 40,
                        bottom: 20,
                    }}
                    onClick={handleOpen}
                >
                    <PlaylistAddIcon /> &nbsp; Add new Blog
                </Fab>
                <AddBlogModal
                    open={open}
                    handleClose={handleClose}
                    setTitle={setTitle}
                    title={title}
                    titleError={titleError}
                    setSubtitle={setSubtitle}
                    subtitle={subtitle}
                    subtitleError={subtitleError}
                    author={author}
                    authorError={authorError}
                    setAuthor={setAuthor}
                    handleSubmit={handleSubmit}
                    modalInfo={modalInfo}
                />
            </Box>
            <Box sx={{ Width: "60%" }}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Blog ID</TableCell>
                                <TableCell align="center">Title</TableCell>
                                <TableCell align="center">Subtitle</TableCell>
                                <TableCell align="center">Author</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {blogs
                                .slice(0)
                                .reverse()
                                .map((row) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                {
                                                    border: 0,
                                                },
                                        }}
                                        hover
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.subtitle}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.author}
                                        </TableCell>
                                        <TableCell align="center">
                                            <EditIcon
                                                onClick={() => {
                                                    editHandler(row.id);
                                                }}
                                                color="primary"
                                                sx={{ cursor: "pointer" }}
                                            />
                                            &nbsp;
                                            <DeleteIcon
                                                color="error"
                                                onClick={() => {
                                                    deleteHandler(row.id);
                                                }}
                                                sx={{ cursor: "pointer" }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {snackState ? (
                <SnackBar
                    snackState={snackState}
                    type={snackType}
                    message={snackMessage}
                    setSnackState={setSnackState}
                />
            ) : null}
        </Box>
    );
}
