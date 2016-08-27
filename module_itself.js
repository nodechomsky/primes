module.exports = function local_caculadddadfasdftor(value){
  var v = value

  var p = {
    x: 100,
    y: 200
  }
  var velo = {
    x: -1,
    y: 30
  }

  function tick(){
    p.x += v.x
    p.y += v.y

  }

  function local_add(k){
    return k+v
  }
  function local_subtract(k){
    return v-k
  }
  function local_update(k){
    v = k
  }

  return {
    "add": local_add,
    "subtract": local_subtract,
    "update": local_update,
    "tick": tick
  }
}
