import React from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { Button, Li } from './styles';

function TechItem({ tech, onDelete }) {
  return (
    <Li>
      {tech}
      <Button onClick={onDelete} type="button">
        Remove <FcFullTrash size="20" />
      </Button>
    </Li>
  );
}

export default TechItem;
