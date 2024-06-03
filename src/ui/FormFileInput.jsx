import styled from "styled-components";

export const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 18px;

  &::file-selector-button {
    font: inherit;
    background-color: #434545;
    border-radius: 1px;
    cursor: pointer;
    border: 1px solid #ddd;
    color: #fff;

    transition: all 0.3s;
    padding: 8px 12px;
    &:hover {
      background-color: #ddd;
    }
  }
`;
