import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

interface TagItemProps {
  iconUrl: string;
  name: string;
}

const TagItem = ({iconUrl, name}: TagItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: iconUrl}} style={styles.icon} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default TagItem;
