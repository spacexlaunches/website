import React, { FunctionComponent } from 'react'

const Patch: FunctionComponent<{
  mission_patch: string | null
  name: string
}> = props => {
  if (props.mission_patch == null) return <div className="patch" />
  const patchFileName = `https://images.weserv.nl/?url=${encodeURIComponent(
    props.mission_patch.replace(/(^\w+:|^)\/\//, '')
  )}`
  return (
    <img
      className="patch"
      alt={`${props.name} patch`}
      src={`${patchFileName}&w=200&h=200`}
    />
  )
}

export default Patch