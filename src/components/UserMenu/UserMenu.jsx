import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserName, getUserAvatarUrl } from 'redux/auth/auth-selectors';
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  ListItem,
} from '@mui/material';
import UserEdit from 'components/UserEdit/UserEdit';
import ModalComp from 'components/ModalComp';
import LogOut from 'components/LogOut/LogOut';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const userAvatarUrl = useSelector(getUserAvatarUrl);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState({
    edit: false,
    logOut: false,
  });

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openModalEdit = () => {
    handleCloseUserMenu();
    setIsOpenModal({
      ...{
        edit: false,
        logOut: false,
      },
      edit: true,
    });
  };

  const closeModalEdit = () => {
    setIsOpenModal({
      ...{
        edit: true,
        logOut: false,
      },
      edit: false,
    });
  };

  const openModalLogOut = () => {
    handleCloseUserMenu();
    setIsOpenModal({
      ...{
        edit: false,
        logOut: false,
      },
      logOut: true,
    });
  };

  const closeModalLogOut = () => {
    setIsOpenModal({
      ...{
        edit: false,
        logOut: true,
      },
      logOut: false,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            display: { xs: 'none', md: 'inline-block' },
          }}
        >
          {userName}
        </Typography>
        <Tooltip title="Open settings">
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{ padding: '0 0 0 10px' }}
          >
            <Avatar alt={userName} src={userAvatarUrl} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        sx={{
          marginTop: { xs: '8px', sm: '12px' },
        }}
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <ListItem
          sx={{
            display: { xs: 'inline-block', md: 'none' },
            padding: '6px 16px',
          }}
          divider
        >
          <Typography
            color="primary"
            sx={{
              fontSize: '18px',
            }}
          >
            {userName}
          </Typography>
        </ListItem>
        <MenuItem onClick={openModalEdit}>
          <Typography
            sx={{
              fontSize: '18px',
            }}
          >
            User edit
          </Typography>
        </MenuItem>
        <MenuItem onClick={openModalLogOut}>
          <Typography
            sx={{
              fontSize: '18px',
            }}
          >
            Logout
          </Typography>
        </MenuItem>
      </Menu>
      <ModalComp open={isOpenModal.edit} handleClose={closeModalEdit}>
        <UserEdit userAvatar={userAvatarUrl} closeModalEdit={closeModalEdit} />
      </ModalComp>
      <ModalComp open={isOpenModal.logOut} handleClose={closeModalLogOut}>
        <LogOut closeModalLogOut={closeModalLogOut} />
      </ModalComp>
    </>
  );
};

export default UserMenu;
