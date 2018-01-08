import React from 'react'
export default class GetApi extends React.Component
{
  render() {
    return (
      <div>show api: {this.props.match.params.apiname} </div>
    )
  }
}
