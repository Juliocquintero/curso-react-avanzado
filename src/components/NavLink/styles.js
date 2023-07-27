import { css, styled } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { fadeIn } from "../styles/animation";

export const Link = styled(LinkRouter)`
	align-items: center;
	display: inline-flex;
	height: 100%;
	justify-content: center;
	text-decoration: none;
	width: 100%;
  color: #888;
  ${props => props.active && css`
  color: #0f00ff;
  &:after {
    ${fadeIn({ time: '0.25s' })}
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  `}
`;
