import styled from "styled-components";
import { Link } from "react-router-dom";
import { globalScheme } from "../../global.styles";

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto auto;
`;

export const DirectoryItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto auto;

  &:hover {
    color: ${globalScheme.darkgreen};
  }
`;

export const ImageContainer = styled(Link)`
  padding-top: 20px;
  margin: auto auto;
`;
