import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <form className="search-bar" action="">
        <input
          className="search-input"
          required
          name="search"
          type="search"
          autoComplete="off"
        />
        <button type="submit" className="search-btn">
          <span>Search</span>
        </button>
      </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .search-bar {
  display: flex;
}

.search-bar input,
.search-btn, 
.search-btn:before, 
.search-btn:after {
  transition: all 0.25s ease-out;
}

.search-bar input,
.search-btn {
  width: 3em;
  height: 3em;
}

.search-bar input:invalid:not(:focus),
.search-btn {
  cursor: pointer;
}

.search-bar,
.search-bar input:focus,
.search-bar input:valid {
  width: 100%;
}

.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
  outline: transparent;
}

.search-bar {
  margin: auto;
  padding: 1.5em;
  justify-content: center;
  max-width: 30em;
}

.search-bar input {
  background: transparent;
  border-radius: 1.5em;
  box-shadow: 0 0 0 0.4em #171717 inset;
  padding: 0.75em;
  transform: translate(0.5em,0.5em) scale(0.5);
  transform-origin: 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.search-bar input::-webkit-search-decoration {
  -webkit-appearance: none;
}

.search-bar input:focus,
.search-bar input:valid {
  background: #fff;
  border-radius: 0.375em 0 0 0.375em;
  box-shadow: 0 0 0 0.1em #d9d9d9 inset;
  transform: scale(1);
}

.search-btn {
  background: #171717;
  border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
  padding: 0.75em;
  position: relative;
  transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.125);
  transform-origin: 0 50%;
}

.search-btn:before, 
.search-btn:after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
}

.search-btn:before {
  border-radius: 50%;
  box-shadow: 0 0 0 0.2em #f1f1f1 inset;
  top: 0.75em;
  left: 0.75em;
  width: 1.2em;
  height: 1.2em;
}

.search-btn:after {
  background: #f1f1f1;
  border-radius: 0 0.25em 0.25em 0;
  top: 51%;
  left: 51%;
  width: 0.75em;
  height: 0.25em;
  transform: translate(0.2em,0) rotate(45deg);
  transform-origin: 0 50%;
}

.search-btn span {
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
  background: #2762f3;
  border-radius: 0 0.375em 0.375em 0;
  transform: scale(1);
}

.search-bar input:focus + .search-btn:before, 
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before, 
.search-bar input:valid + .search-btn:after {
  opacity: 1;
}

.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
  background: #0c48db;
}

.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
  transform: translateY(1px);
}

@media screen and (prefers-color-scheme: dark) {
  body, input {
    color: #f1f1f1;
  }

  .search-bar input {
    box-shadow: 0 0 0 0.4em #f1f1f1 inset;
  }

  .search-bar input:focus,
	.search-bar input:valid {
    background: #3d3d3d;
    box-shadow: 0 0 0 0.1em #3d3d3d inset;
  }

  .search-btn {
    background: #f1f1f1;
  }
}
`;

export default Input;
