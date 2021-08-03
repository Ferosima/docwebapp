/* eslint-disable prefer-const */
import {
  IoDocumentsOutline,
  IoDocumentsSharp,
  IoSettingsOutline,
  IoSettingsSharp,
  IoNotificationsOutline,
  IoNotifications,
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
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import {
  RiPenNibFill, RiPenNibLine, RiPencilFill, RiPencilLine,
} from "react-icons/ri";

export const icons = {
  documents: <IoDocumentsSharp />,
  documentsOutline: <IoDocumentsOutline />,
  pen: <HiPencil />,
  penOutline: <HiOutlinePencil />,
  signatures: <HiPencil />,
  signaturesOutline: <HiOutlinePencil />,
  // signatures: <FaFileSignature />,
  settings: <IoSettingsSharp />,
  settingsOutline: <IoSettingsOutline />,
  notifications: <IoNotifications />,
  notificationsOutline: <IoNotificationsOutline />,
  arrowLeft: <HiOutlineArrowCircleLeft />,
  arrowRight: <HiOutlineArrowCircleRight />,
  logout: <BiLogOut />,
  user: <FaUserCircle />,
  userOutline: <FaRegUserCircle />,
  undefined: <AiOutlineQuestionCircle />,
  people: <BsPeopleFill />,
  peopleOutline: <BsPeople />,
};

export default icons;
