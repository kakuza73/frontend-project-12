import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap';
import { setActiveChannel } from '../../store/slices/channelSlice.js';
import { openModal } from '../../store/slices/modalSlice.js';
import { selectChannelID } from '../selectors.js';

const Channel = ({ channel }) => {
  const activeChannelId = useSelector(selectChannelID);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const variant = channel.id === activeChannelId ? 'secondary' : 'pills';

  const clickHandler = () => {
    dispatch(setActiveChannel({
      activeChannelId: channel.id,
      activeChannelName: channel.name,
    }));
  };

  const removeHandler = () => {
    dispatch(openModal({
      channelID: channel.id,
      type: 'remove',
    }));
  };

  const editHandler = () => {
    dispatch(openModal({
      channelID: channel.id,
      channelName: channel.name,
      type: 'edit',
    }));
  };

  return (
    <Dropdown className="d-flex" as={ButtonGroup} role="group">
      <Button className="w-100 rounded-0 text-start text-truncate" variant={variant} onClick={clickHandler}>
        <span className="me-1">
          {t('channelsContainer.prefix')}
        </span>
        {channel.name}
      </Button>
      {channel.removable ? (
        <div>
          <Dropdown.Toggle variant={variant} split className="flex-grow-0">
            <span className="visually-hidden">{t('channelsContainer.control')}</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={removeHandler}>{t('channelsContainer.remove')}</Dropdown.Item>
            <Dropdown.Item onClick={editHandler}>{t('channelsContainer.rename')}</Dropdown.Item>
          </Dropdown.Menu>
        </div>
      )
        : null}
    </Dropdown>
  );
};

export default Channel;
