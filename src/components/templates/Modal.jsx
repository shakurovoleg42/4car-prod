import { Modal, Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%', // для стандартных экранов
  maxHeight: '95%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
  // Скрываем scrollbar
  scrollbarWidth: 'none', // для Firefox
  '&::-webkit-scrollbar': {
    display: 'none', // для Chrome, Safari и Edge
  },
  // Увеличение ширины для мобильных устройств
  '@media (max-width: 576px)': {
    width: '95%', // Ширина для мобильных
  },
};

const ModalTemplate = ({ open, handleClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalTemplate;
