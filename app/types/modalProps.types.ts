interface modalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  handleDelete?: () => void;
  loading?: boolean;
}

export type { modalProps };
