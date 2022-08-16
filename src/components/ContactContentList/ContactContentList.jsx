import { List } from '@mui/material';
import ContactContentItem from 'components/ContactContentItem';

const ContactContentList = ({ element }) => {
  return (
    <List dense disablePadding>
      <ContactContentItem name="Name:" content={element.name} />
      <ContactContentItem name="Phone:" content={element.phone} />
      <ContactContentItem name="Email:" content={element.email} />
      {element.address && (
        <ContactContentItem name="Address:" content={element.address} />
      )}
      {element.other && (
        <ContactContentItem name="Other:" content={element.other} />
      )}
    </List>
  );
};

export default ContactContentList;
