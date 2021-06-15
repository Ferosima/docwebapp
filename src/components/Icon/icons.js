/* eslint-disable prefer-const */
import {
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoSettingsOutline,
  IoSettings,
} from "react-icons/io5";
import {
  HiPencil,
  HiOutlinePencil,
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaFileSignature } from "react-icons/fa";

export const icons = {
  documents: <IoDocumentsSharp />,
  documentsOutline: <IoDocumentsOutline />,
  pen: <HiPencil />,
  penOutline: <HiOutlinePencil />,
  signatures: <FaFileSignature />,
  settings: <IoSettingsOutline />,
  settingsOutline: <IoSettingsOutline />,
  arrowLeft: <HiOutlineArrowCircleLeft />,
  arrowRight: <HiOutlineArrowCircleRight />,
  undefined: <AiOutlineQuestionCircle />,
};

export default icons;
