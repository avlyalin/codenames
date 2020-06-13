import { toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-right',
  autoClose: 1400,
  hideProgressBar: true,
  closeOnClick: true,
  progress: false,
};

const localToast = {
  success(content, options) {
    return toast.success(content, { ...defaultOptions, ...options });
  },
  error(content, options) {
    return toast.error(content, { ...defaultOptions, ...options });
  },
  info(content, options) {
    return toast.dark(content, { ...defaultOptions, ...options });
  },
};

export { localToast as toast };
