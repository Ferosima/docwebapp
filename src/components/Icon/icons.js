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
import { FaFileSignature, FaRegUserCircle, FaUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

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
  logout: <BiLogOut />,
  user: <FaRegUserCircle />,
  userOutline: <FaUserCircle />,
  undefined: <AiOutlineQuestionCircle />,
};

export default icons;
