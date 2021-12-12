from graphviz import Digraph

class Tree:
	def __init__(self,x,left=0,right=0): #left和right通过赋默认值变为可选参数
		self.val = x
		self.left = left
		self.right = right
root = Tree(5)
for i in range(4):
	exec(f"node{i} = Tree({i})")

#画出树
dot = Digraph(name = "tree",comment="this is the tree",format="png")
dot.node(name="r",label=str(5))
for i in range(4):
	dot.node(name=str(i),label=str(i))
dot.edges(['r0','r1','12','13']) #edge单边,edges多边
dot.render(filename = "MyTree",view=True)

#用代码将节点相连
root.left = node0
root.right = node1
node1.left = node2
node1.right = node3

#前中后序遍历
def traverse(root,methed):
	if not root:
		return 0
	if methed == "前":
		print(root.val)
		traverse(root.left,methed)
		traverse(root.right,methed)
	elif methed == "中":
		traverse(root.left,methed)
		print(root.val)
		traverse(root.right,methed)
	elif methed == "后":
		traverse(root.left,methed)
		traverse(root.right,methed)
		print(root.val)
	else:
		print("methed字段只能输入[前/中/后]")

#主程序
for methed in ["前","中","后"]:
	print("使用",methed,"遍历的结果是:")
	traverse(root,methed)

