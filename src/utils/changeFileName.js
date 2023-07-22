const changeFileName = (fileName) => {
  let _fileName = fileName.replace(/-/g, ' ')
  _fileName = _fileName.charAt(0).toUpperCase() + _fileName.slice(1)

  return _fileName
}

export default changeFileName