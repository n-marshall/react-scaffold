import React from "react";

const passer = ({ children, style }) =>
  <div style={style}>
    {children}
  </div>;

export const [
  Screen,
  Row,
  View,
  Subtitle,
  Caption,
  Header,
  Title,
  Text
] = new Array(8).fill(passer);

export const Enhance = ComposedComponent => ({ style }) =>
  <ComposedComponent style={style} />;

const applyOnChangeText = onChangeTextPropFn => event => {
  onChangeTextPropFn(event.target.value);
};

const onKeyPressFn = submitEditingFn => e => {
  if (e.key === "Enter") {
    submitEditingFn();
  }
};

export const TextInput = props =>
  <input
    ref={props.setRef}
    style={props.style}
    onFocus={props.onFocus}
    placeholder={props.placeholder}
    onChange={applyOnChangeText(props.onChangeText)}
    onKeyPress={onKeyPressFn(props.onSubmitEditing)}
    onSubmit={props.onSubmitEditing}
    value={props.value ? props.value : ""}
    onBlur={props.onBlur}
    type={props.type}
  />;

export const Spinner = () => <div>Spinner</div>;

export const Button = props =>
  <button onClick={props.onPress} style={props.style}>
    {props.text || props.children}
  </button>;

const getRow = (dataItem, idx) => {
  const { renderRow } = this.props;
  return (
    <div key={idx} style={this.props.rowStyle}>
      {renderRow(dataItem)}
    </div>
  );
};

export const ListView = props =>
  <div style={this.props.style}>
    {props.data.map(getRow)}
  </div>;

export const Image = ({ src, style }) =>
  <img src={src} alt={src} style={style} />;
