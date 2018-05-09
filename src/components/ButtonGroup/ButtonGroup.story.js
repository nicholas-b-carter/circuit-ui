import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, boolean } from '@storybook/addon-knobs/react';

import withTests from '../../util/withTests';
import ButtonGroup from './';
import Button from '../Button';

storiesOf('ButtonGroup', module)
  .addDecorator(withTests('ButtonGroup'))
  .add(
    'Default ButtonGroup',
    withInfo()(() => (
      <div style={{ width: '500px', border: '1px dotted #000' }}>
        <ButtonGroup
          align={select(
            'Align',
            [ButtonGroup.LEFT, ButtonGroup.RIGHT],
            ButtonGroup.RIGHT
          )}
          noMargin={boolean('No Margin Bottom', false)}
        >
          <Button secondary>Cancel</Button>
          <Button>Confirm</Button>
        </ButtonGroup>
      </div>
    ))
  );
