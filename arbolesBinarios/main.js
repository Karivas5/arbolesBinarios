console.log("Árboles binarios.");

//1.Escribe una función que dados dos árboles binarios A y B, 
//detrmine si son idénticos o no.
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function areIdentical(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  
  return root1.value === root2.value &&
         areIdentical(root1.left, root2.left) &&
         areIdentical(root1.right, root2.right);
}
// Ejemplo:
const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(areIdentical(tree1, tree2)); //En la consola debe resultar: true, 
                                         //con los valores presentados.


//2.Escribe una función que dado un árbol binario A,
//obtenga una copia del mismo.
function copyTree(root) {
  if (!root) return null;
  
  return new TreeNode(
    root.value,
    copyTree(root.left),
    copyTree(root.right)
  );
}
// Ejemplo:
const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const copiedTree = copyTree(tree3);
console.log(areIdentical(tree3, copiedTree)); //En la consola debe resultar: true, 
                                              //con los valores presentados.


//3.Escribe una función que visualice los nodos 
//que están en el nivel n de un árbol binario.
function nodesAtLevel(root, level) {
  if (!root) return [];

  const result = [];
  const queue = [{ node: root, depth: 0 }];

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (depth === level) {
      result.push(node.value);
    } else if (depth < level) {
      if (node.left) queue.push({ node: node.left, depth: depth + 1 });
      if (node.right) queue.push({ node: node.right, depth: depth + 1 });
    }
  }

  return result;
}
// Ejemplo:
const tree4 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(nodesAtLevel(tree4, 1)); //En consola se debe mostrar: [2, 3]


//4.Escribe una función que devuelva el número de hojas 
//de un árbol binario.
function countLeaves(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  return countLeaves(root.left) + countLeaves(root.right);
}

// Ejemplo:
const tree5 = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
console.log(countLeaves(tree5)); //En consola debe mostrar: 2 
                                 //(nodos 2 y 4 son hojas)