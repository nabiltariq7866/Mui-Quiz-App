import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Account } from "@toolpad/core/Account";
import logo from "../../assets/QuizLogo.png";
import Logout from "@mui/icons-material/Logout";
import AccountInfo from "./AccountInfo";
import { NavLink } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useNavigate, replace, useLocation } from "react-router-dom";
import AppContext from "../../context/AuthContext";
import QuizIcon from "@mui/icons-material/Quiz";
import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar2() {
  const context = React.useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const location = useLocation(); // Get current route
  const isActive = (path) => {
    return location.pathname === path;
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Account
        slotProps={{
          signInButton: {
            color: "success",
          },
          signOutButton: {
            color: "success",
            startIcon: <Logout />,
          },
          preview: {
            variant: "expanded",
            slotProps: {
              avatarIconButton: {
                sx: {
                  width: "fit-content",
                  margin: "auto",
                },
              },
              avatar: {
                variant: "rounded",
              },
            },
          },
        }}
      />
    </Menu>
  );
  const adminLinks = [
    { text: "Home", icon: <HomeIcon />, route: "/AdminDashboard" },
    {
      text: "All Question",
      icon: <QuizIcon />,
      route: "/AdminDashboard/AllQuestionAdmin",
    },
    {
      text: "Add Question",
      icon: <LibraryAddIcon />,
      route: "/AdminDashboard/CreateQuestion",
    },
    {
      text: "All Result",
      icon: <ManageHistoryOutlinedIcon />,
      route: "/AdminDashboard/AllQuizDetails",
    },
  ];

  const employeeLinks = [
    { text: "Home", icon: <HomeIcon />, route: "/EmployeeDashboard" },
    {
      text: "Take Quiz",
      icon: <QuizIcon />,
      route: "/EmployeeDashboard/TakeQuiz",
    },
    {
      text: "Final Result",
      icon: <BackupTableIcon />,
      route: "/EmployeeDashboard/FinalResult",
    },
  ];

  const renderNavLinks = (links) => {
    return links.map(({ text, icon, route }) => (
      <ListItem
        disablePadding
        key={text}
        sx={[
          {
            display: "flex",
            borderRadius: "9999px",
            alignItems:"center",
            justifyContent:"center",
            width: "230px",
            height: "40px",
          },
          isActive(route)
            ? { backgroundColor: "#43b5a0", color: "white" }
            : { backgroundColor: "transparent", color: "#43b5a0" },
        ]}
        onClick={() => navigate(route)}
      >
        <ListItemButton sx={{display:"flex",gap:"2px"}}>
          <ListItemIcon sx={{ minWidth: 0, justifyContent: "center" }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    ));
  };
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          background: "white",
          width: "1423px",
          left: "12.7%",
          borderRadius: "1.5rem",
          top: "1%",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} alt="" className="w-[250px]" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <List
                sx={{
                  display: "flex",
                  width: "70%",
                  gap: "1rem",
                }}
              >
                {context.userData.role === "admin"
                  ? renderNavLinks(adminLinks)
                  : renderNavLinks(employeeLinks)}
              </List>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, color: "#43b5a0" }}>
            <AccountInfo />
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
