import { useState } from "react";
import { Modal } from "../components/Modal/Modal";

export const useModal = (value = false) => {
  const [isVisible, setIsVisible] = useState(value);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({ children, ...props }) => (
    <Modal {...props} onClose={() => hide()} open={isVisible}>
      {children}
    </Modal>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};
