var searchIndex = {};
searchIndex['petgraph'] = {"items":[[0,"","petgraph","**petgraph** is a graph data structure library.",null,null],[3,"MinScored","","`MinScored<K, T>` holds a score `K` and a scored object `T` in\na pair for use with a `BinaryHeap`.",null,null],[3,"Directed","","Marker type for a directed graph.",null,null],[3,"Undirected","","Marker type for an undirected graph.",null,null],[3,"Ptr","","A reference that is hashed and compared by its pointer value.",null,null],[4,"EdgeDirection","","Edge direction",null,null],[13,"Outgoing","","An `Outgoing` edge is an outward edge *from* the current node.",0,null],[13,"Incoming","","An `Incoming` edge is an inbound edge *to* the current node.",0,null],[11,"fmt","","",1,{"inputs":[{"name":"minscored"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"minscored"}],"output":{"name":"minscored"}}],[11,"eq","","",1,{"inputs":[{"name":"minscored"},{"name":"minscored"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"minscored"},{"name":"minscored"}],"output":{"name":"option"}}],[11,"cmp","","",1,{"inputs":[{"name":"minscored"},{"name":"minscored"}],"output":{"name":"ordering"}}],[0,"algo","","Graph algorithms.",null,null],[5,"is_isomorphic","petgraph::algo","Return `true` if the graphs `g0` and `g1` are isomorphic.",null,{"inputs":[{"name":"graph"},{"name":"graph"}],"output":{"name":"bool"}}],[5,"dijkstra","","Dijkstra's shortest path algorithm.",null,{"inputs":[{"name":"g"},{"name":"nodeid"},{"name":"option"},{"name":"f"}],"output":{"name":"hashmap"}}],[5,"is_cyclic_undirected","","Return `true` if the input graph contains a cycle.",null,{"inputs":[{"name":"graph"}],"output":{"name":"bool"}}],[5,"is_cyclic","","**Deprecated: Renamed to `is_cyclic_undirected`.**",null,{"inputs":[{"name":"graph"}],"output":{"name":"bool"}}],[5,"is_cyclic_directed","","Return `true` if the input directed graph contains a cycle.",null,{"inputs":[{"name":"graph"}],"output":{"name":"bool"}}],[5,"toposort","","Perform a topological sort of a directed graph.",null,{"inputs":[{"name":"graph"}],"output":{"name":"vec"}}],[5,"scc","","Compute the *strongly connected components* using Kosaraju's algorithm.",null,{"inputs":[{"name":"graph"}],"output":{"name":"vec"}}],[5,"connected_components","","Return the number of connected components of the graph.",null,{"inputs":[{"name":"graph"}],"output":{"name":"usize"}}],[5,"min_spanning_tree","","Compute a *minimum spanning tree* of a graph.",null,{"inputs":[{"name":"graph"}],"output":{"name":"graph"}}],[0,"graphmap","petgraph","`GraphMap<N, E>` is an undirected graph where node values are mapping keys.",null,null],[3,"GraphMap","petgraph::graphmap","`GraphMap<N, E>` is an undirected graph, with generic node values `N` and edge weights `E`.",null,null],[3,"Nodes","","",null,null],[3,"Neighbors","","",null,null],[3,"Edges","","",null,null],[12,"from","","**Deprecated: should be private**",2,null],[12,"edges","","**Deprecated: should be private**",2,null],[12,"iter","","**Deprecated: should be private**",2,null],[3,"AllEdges","","",null,null],[8,"NodeTrait","","A trait group for `GraphMap`'s node identifier.",null,null],[11,"clone","","",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"graphmap"}}],[11,"fmt","","",3,{"inputs":[{"name":"graphmap"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `GraphMap`.",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"self"}}],[11,"with_capacity","","Create a new `GraphMap` with estimated capacity.",3,{"inputs":[{"name":"graphmap"},{"name":"usize"},{"name":"usize"}],"output":{"name":"self"}}],[11,"from_edges","","Create a new `GraphMap` from an iterable of edges.",3,{"inputs":[{"name":"graphmap"},{"name":"i"}],"output":{"name":"self"}}],[11,"node_count","","Return the number of nodes in the graph.",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"usize"}}],[11,"edge_count","","Return the number of edges in the graph.",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"usize"}}],[11,"clear","","Remove all nodes and edges",3,{"inputs":[{"name":"graphmap"}],"output":null}],[11,"add_node","","Add node `n` to the graph.",3,{"inputs":[{"name":"graphmap"},{"name":"n"}],"output":{"name":"n"}}],[11,"remove_node","","Return `true` if node `n` was removed.",3,{"inputs":[{"name":"graphmap"},{"name":"n"}],"output":{"name":"bool"}}],[11,"contains_node","","Return `true` if the node is contained in the graph.",3,{"inputs":[{"name":"graphmap"},{"name":"n"}],"output":{"name":"bool"}}],[11,"add_edge","","Add an edge connecting `a` and `b` to the graph.",3,{"inputs":[{"name":"graphmap"},{"name":"n"},{"name":"n"},{"name":"e"}],"output":{"name":"bool"}}],[11,"remove_edge","","Remove edge from `a` to `b` from the graph and return the edge weight.",3,{"inputs":[{"name":"graphmap"},{"name":"n"},{"name":"n"}],"output":{"name":"option"}}],[11,"contains_edge","","Return `true` if the edge connecting `a` with `b` is contained in the graph.",3,{"inputs":[{"name":"graphmap"},{"name":"n"},{"name":"n"}],"output":{"name":"bool"}}],[11,"nodes","","Return an iterator over the nodes of the graph.",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"nodes"}}],[11,"neighbors","","Return an iterator over the nodes that are connected with `from` by edges.",3,{"inputs":[{"name":"graphmap"},{"name":"n"}],"output":{"name":"neighbors"}}],[11,"edges","","Return an iterator over the nodes that are connected with `from` by edges,\npaired with the edge weight.",3,{"inputs":[{"name":"graphmap"},{"name":"n"}],"output":{"name":"edges"}}],[11,"edge_weight","","Return a reference to the edge weight connecting `a` with `b`, or\n`None` if the edge does not exist in the graph.",3,{"inputs":[{"name":"graphmap"},{"name":"n"},{"name":"n"}],"output":{"name":"option"}}],[11,"edge_weight_mut","","Return a mutable reference to the edge weight connecting `a` with `b`, or\n`None` if the edge does not exist in the graph.",3,{"inputs":[{"name":"graphmap"},{"name":"n"},{"name":"n"}],"output":{"name":"option"}}],[11,"all_edges","","Return an iterator over all edges of the graph with their weight in arbitrary order.",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"alledges"}}],[11,"from_iter","","",3,{"inputs":[{"name":"graphmap"},{"name":"i"}],"output":{"name":"self"}}],[11,"extend","","",3,{"inputs":[{"name":"graphmap"},{"name":"i"}],"output":null}],[11,"next","","",4,{"inputs":[{"name":"nodes"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"next_back","","",4,{"inputs":[{"name":"nodes"}],"output":{"name":"option"}}],[11,"next","","",5,{"inputs":[{"name":"neighbors"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next_back","","",5,{"inputs":[{"name":"neighbors"}],"output":{"name":"option"}}],[11,"next","","",2,{"inputs":[{"name":"edges"}],"output":{"name":"option"}}],[11,"next","","",6,{"inputs":[{"name":"alledges"}],"output":{"name":"option"}}],[11,"index","","",3,null],[11,"index_mut","","",3,null],[0,"graph","petgraph","`Graph<N, E, Ty, Ix>` is a graph datastructure using an adjacency list representation.",null,null],[3,"NodeIndex","petgraph::graph","Node identifier.",null,null],[3,"EdgeIndex","","Edge identifier.",null,null],[3,"Node","","The graph's node type.",null,null],[12,"weight","","Associated node data.",7,null],[3,"Edge","","The graph's edge type.",null,null],[12,"weight","","Associated edge data.",8,null],[3,"Graph","","`Graph<N, E, Ty, Ix>` is a graph datastructure using an adjacency list representation.",null,null],[3,"WithoutEdges","","An iterator over either the nodes without edges to them or from them.",null,null],[3,"Neighbors","","Iterator over the neighbors of a node.",null,null],[3,"Edges","","Iterator over the edges of a node.",null,null],[3,"NodeWeightsMut","","Iterator yielding mutable access to all node weights.",null,null],[3,"EdgeWeightsMut","","Iterator yielding mutable access to all edge weights.",null,null],[3,"WalkEdges","","A “walker” object that can be used to step through the edge list of a node.",null,null],[3,"NodeIndices","","Iterator over the node indices of a graph.",null,null],[3,"EdgeIndices","","Iterator over the edge indices of a graph.",null,null],[5,"node_index","","Short version of `NodeIndex::new`",null,{"inputs":[{"name":"usize"}],"output":{"name":"nodeindex"}}],[5,"edge_index","","Short version of `EdgeIndex::new`",null,{"inputs":[{"name":"usize"}],"output":{"name":"edgeindex"}}],[6,"DefIndex","","The default integer type for node and edge indices in `Graph`.\n`u32` is the default to reduce the size of the graph's data and improve\nperformance in the common case.",null,null],[8,"IndexType","","Trait for the unsigned integer type used for node and edge indices.",null,null],[10,"new","","",9,{"inputs":[{"name":"indextype"},{"name":"usize"}],"output":{"name":"self"}}],[10,"index","","",9,{"inputs":[{"name":"indextype"}],"output":{"name":"usize"}}],[10,"max","","",9,{"inputs":[{"name":"indextype"}],"output":{"name":"self"}}],[11,"zero","","**Deprecated**",9,{"inputs":[{"name":"indextype"}],"output":{"name":"self"}}],[11,"one","","**Deprecated**",9,{"inputs":[{"name":"indextype"}],"output":{"name":"self"}}],[8,"GraphIndex","","A  `GraphIndex` is a node or edge index.",null,null],[11,"hash","","",10,null],[11,"cmp","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"option"}}],[11,"lt","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"le","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"gt","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"ge","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"eq","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"fmt","","",10,{"inputs":[{"name":"nodeindex"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",10,{"inputs":[{"name":"nodeindex"}],"output":{"name":"nodeindex"}}],[11,"new","","",10,{"inputs":[{"name":"nodeindex"},{"name":"usize"}],"output":{"name":"self"}}],[11,"index","","",10,{"inputs":[{"name":"nodeindex"}],"output":{"name":"usize"}}],[11,"end","","",10,{"inputs":[{"name":"nodeindex"}],"output":{"name":"self"}}],[11,"from","","",10,{"inputs":[{"name":"nodeindex"},{"name":"ix"}],"output":{"name":"self"}}],[11,"hash","","",11,null],[11,"cmp","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"option"}}],[11,"lt","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"le","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"gt","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"ge","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"eq","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"edgeindex"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"edgeindex"}],"output":{"name":"edgeindex"}}],[11,"new","","",11,{"inputs":[{"name":"edgeindex"},{"name":"usize"}],"output":{"name":"self"}}],[11,"index","","",11,{"inputs":[{"name":"edgeindex"}],"output":{"name":"usize"}}],[11,"end","","An invalid `EdgeIndex` used to denote absence of an edge, for example\nto end an adjacency list.",11,{"inputs":[{"name":"edgeindex"}],"output":{"name":"self"}}],[11,"fmt","","",11,{"inputs":[{"name":"edgeindex"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",7,{"inputs":[{"name":"node"}],"output":{"name":"node"}}],[11,"fmt","","",7,{"inputs":[{"name":"node"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next_edge","","Accessor for data structure internals: the first edge in the given direction.",7,{"inputs":[{"name":"node"},{"name":"edgedirection"}],"output":{"name":"edgeindex"}}],[11,"clone","","",8,{"inputs":[{"name":"edge"}],"output":{"name":"edge"}}],[11,"fmt","","",8,{"inputs":[{"name":"edge"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",8,{"inputs":[{"name":"edge"},{"name":"edgedirection"}],"output":{"name":"edgeindex"}}],[11,"source","","Return the source node index.",8,{"inputs":[{"name":"edge"}],"output":{"name":"nodeindex"}}],[11,"target","","Return the target node index.",8,{"inputs":[{"name":"edge"}],"output":{"name":"nodeindex"}}],[11,"clone","","",12,{"inputs":[{"name":"graph"}],"output":{"name":"self"}}],[11,"fmt","","",12,{"inputs":[{"name":"graph"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `Graph` with directed edges.",12,{"inputs":[{"name":"graph"}],"output":{"name":"self"}}],[11,"new_undirected","","Create a new `Graph` with undirected edges.",12,{"inputs":[{"name":"graph"}],"output":{"name":"self"}}],[11,"with_capacity","","Create a new `Graph` with estimated capacity.",12,{"inputs":[{"name":"graph"},{"name":"usize"},{"name":"usize"}],"output":{"name":"self"}}],[11,"node_count","","Return the number of nodes (vertices) in the graph.",12,{"inputs":[{"name":"graph"}],"output":{"name":"usize"}}],[11,"edge_count","","Return the number of edges in the graph.",12,{"inputs":[{"name":"graph"}],"output":{"name":"usize"}}],[11,"is_directed","","Whether the graph has directed edges or not.",12,{"inputs":[{"name":"graph"}],"output":{"name":"bool"}}],[11,"add_node","","Add a node (also called vertex) with weight `w` to the graph.",12,{"inputs":[{"name":"graph"},{"name":"n"}],"output":{"name":"nodeindex"}}],[11,"node_weight","","Access node weight for node `a`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"option"}}],[11,"node_weight_mut","","Access node weight for node `a`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"option"}}],[11,"add_edge","","Add an edge from `a` to `b` to the graph, with its edge weight.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"nodeindex"},{"name":"e"}],"output":{"name":"edgeindex"}}],[11,"update_edge","","Add or update an edge from `a` to `b`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"nodeindex"},{"name":"e"}],"output":{"name":"edgeindex"}}],[11,"edge_weight","","Access the edge weight for `e`.",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"}],"output":{"name":"option"}}],[11,"edge_weight_mut","","Access the edge weight for `e` mutably.",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"}],"output":{"name":"option"}}],[11,"edge_endpoints","","Access the source and target nodes for `e`.",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"}],"output":{"name":"option"}}],[11,"remove_node","","Remove `a` from the graph if it exists, and return its weight.\nIf it doesn't exist in the graph, return `None`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"option"}}],[11,"remove_edge","","Remove an edge and return its edge weight, or `None` if it didn't exist.",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"}],"output":{"name":"option"}}],[11,"neighbors","","Return an iterator of all nodes with an edge starting from `a`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"neighbors"}}],[11,"neighbors_directed","","Return an iterator of all neighbors that have an edge between them and `a`,\nin the specified direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"edgedirection"}],"output":{"name":"neighbors"}}],[11,"neighbors_undirected","","Return an iterator of all neighbors that have an edge between them and `a`,\nin either direction.\nIf the graph is undirected, this is equivalent to *.neighbors(a)*.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"neighbors"}}],[11,"edges","","Return an iterator over the neighbors of node `a`, paired with their respective edge\nweights.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"edges"}}],[11,"edges_directed","","Return an iterator of all neighbors that have an edge between them and `a`,\nin the specified direction, paired with the respective edge weights.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"edgedirection"}],"output":{"name":"edges"}}],[11,"edges_both","","Return an iterator over the edgs from `a` to its neighbors, then *to* `a` from its\nneighbors.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"edges"}}],[11,"find_edge","","Lookup an edge from `a` to `b`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"option"}}],[11,"find_edge_undirected","","Lookup an edge between `a` and `b`, in either direction.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"option"}}],[11,"without_edges","","Return an iterator over either the nodes without edges to them or from them.",12,{"inputs":[{"name":"graph"},{"name":"edgedirection"}],"output":{"name":"withoutedges"}}],[11,"node_indices","","Return an iterator over the node indices of the graph",12,{"inputs":[{"name":"graph"}],"output":{"name":"nodeindices"}}],[11,"node_weights_mut","","Return an iterator yielding mutable access to all node weights.",12,{"inputs":[{"name":"graph"}],"output":{"name":"nodeweightsmut"}}],[11,"edge_indices","","Return an iterator over the edge indices of the graph",12,{"inputs":[{"name":"graph"}],"output":{"name":"edgeindices"}}],[11,"edge_weights_mut","","Return an iterator yielding mutable access to all edge weights.",12,{"inputs":[{"name":"graph"}],"output":{"name":"edgeweightsmut"}}],[11,"raw_nodes","","Access the internal node array.",12,null],[11,"raw_edges","","Access the internal edge array.",12,null],[11,"first_edge","","Accessor for data structure internals: the first edge in the given direction.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"edgedirection"}],"output":{"name":"option"}}],[11,"next_edge","","Accessor for data structure internals: the next edge for the given direction.",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"},{"name":"edgedirection"}],"output":{"name":"option"}}],[11,"walk_edges_directed","","Return a “walker” object that can be used to step through the edges\nof the node `a` in direction `dir`.",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"edgedirection"}],"output":{"name":"walkedges"}}],[11,"index_twice_mut","","Index the `Graph` by two indices, any combination of\nnode or edge indices is fine.",12,null],[11,"reverse","","Reverse the direction of all edges",12,{"inputs":[{"name":"graph"}],"output":null}],[11,"clear","","Remove all nodes and edges",12,{"inputs":[{"name":"graph"}],"output":null}],[11,"clear_edges","","Remove all edges",12,{"inputs":[{"name":"graph"}],"output":null}],[11,"retain_nodes","","Remove all nodes that return `false` from the `visit` closure.",12,{"inputs":[{"name":"graph"},{"name":"f"}],"output":null}],[11,"retain_edges","","Remove all edges that return `false` from the `visit` closure.",12,{"inputs":[{"name":"graph"},{"name":"f"}],"output":null}],[11,"from_edges","","Create a new `Graph` from an iterable of edges.",12,{"inputs":[{"name":"graph"},{"name":"i"}],"output":{"name":"self"}}],[11,"extend_with_edges","","Extend the graph from an iterable of edges.",12,{"inputs":[{"name":"graph"},{"name":"i"}],"output":null}],[11,"map","","Create a new `Graph` by mapping node and edge weights.",12,{"inputs":[{"name":"graph"},{"name":"f"},{"name":"g"}],"output":{"name":"graph"}}],[11,"filter_map","","Create a new `Graph` by mapping nodes and edges.\nA node or edge may be mapped to `None` to exclude it from\nthe resulting graph.",12,{"inputs":[{"name":"graph"},{"name":"f"},{"name":"g"}],"output":{"name":"graph"}}],[11,"into_edge_type","","Convert the graph into either undirected or directed. No edge adjustments\nare done, so you may want to go over the result to remove or add edges.",12,{"inputs":[{"name":"graph"}],"output":{"name":"graph"}}],[11,"next","","",13,{"inputs":[{"name":"withoutedges"}],"output":{"name":"option"}}],[11,"next","","",14,{"inputs":[{"name":"neighbors"}],"output":{"name":"option"}}],[11,"next","","",15,{"inputs":[{"name":"edges"}],"output":{"name":"option"}}],[11,"next","","",16,{"inputs":[{"name":"nodeweightsmut"}],"output":{"name":"option"}}],[11,"size_hint","","",16,null],[11,"next","","",17,{"inputs":[{"name":"edgeweightsmut"}],"output":{"name":"option"}}],[11,"size_hint","","",17,null],[11,"index","","",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"n"}}],[11,"index_mut","","",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"n"}}],[11,"index","","",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"}],"output":{"name":"e"}}],[11,"index_mut","","",12,{"inputs":[{"name":"graph"},{"name":"edgeindex"}],"output":{"name":"e"}}],[11,"index","","",10,{"inputs":[{"name":"nodeindex"}],"output":{"name":"usize"}}],[11,"is_node_index","","",10,{"inputs":[{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"index","","",11,{"inputs":[{"name":"edgeindex"}],"output":{"name":"usize"}}],[11,"is_node_index","","",11,{"inputs":[{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"fmt","","",18,{"inputs":[{"name":"walkedges"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",18,{"inputs":[{"name":"walkedges"}],"output":{"name":"walkedges"}}],[11,"next","","Fetch the next edge index in the walk for graph `g`.",18,{"inputs":[{"name":"walkedges"},{"name":"graph"}],"output":{"name":"option"}}],[11,"next_neighbor","","Fetch the next edge index and the next node index in the walk for graph `g`.",18,{"inputs":[{"name":"walkedges"},{"name":"graph"}],"output":{"name":"option"}}],[11,"next","","",19,{"inputs":[{"name":"nodeindices"}],"output":{"name":"option"}}],[11,"size_hint","","",19,null],[11,"next_back","","",19,{"inputs":[{"name":"nodeindices"}],"output":{"name":"option"}}],[11,"next","","",20,{"inputs":[{"name":"edgeindices"}],"output":{"name":"option"}}],[11,"size_hint","","",20,null],[11,"next_back","","",20,{"inputs":[{"name":"edgeindices"}],"output":{"name":"option"}}],[0,"dot","petgraph","Simple graphviz dot file format output.",null,null],[3,"Dot","petgraph::dot","`Dot` implements output to graphviz .dot format for a graph.",null,null],[4,"Config","","`Dot` configuration.",null,null],[13,"NodeIndexLabel","","Use indices for node labels.",21,null],[13,"EdgeIndexLabel","","Use indices for edge labels.",21,null],[13,"EdgeNoLabel","","Use no edge labels.",21,null],[11,"new","","Create a `Dot` formatting wrapper with default configuration.",22,{"inputs":[{"name":"dot"},{"name":"g"}],"output":{"name":"self"}}],[11,"with_config","","Create a `Dot` formatting wrapper with custom configuration.",22,null],[11,"eq","","",21,{"inputs":[{"name":"config"},{"name":"config"}],"output":{"name":"bool"}}],[11,"ne","","",21,{"inputs":[{"name":"config"},{"name":"config"}],"output":{"name":"bool"}}],[11,"fmt","","",21,{"inputs":[{"name":"config"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",22,{"inputs":[{"name":"dot"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",22,{"inputs":[{"name":"dot"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",22,{"inputs":[{"name":"dot"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",22,{"inputs":[{"name":"dot"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"visit","petgraph","Graph visitor algorithms.",null,null],[3,"AsUndirected","petgraph::visit","Wrapper type for walking the graph as if it is undirected",null,null],[3,"Reversed","","Wrapper type for walking edges the other way",null,null],[3,"Dfs","","A depth first search (DFS) of a graph.",null,null],[12,"stack","","The stack of nodes to visit",23,null],[12,"discovered","","The map of discovered nodes",23,null],[3,"DfsIter","","An iterator for a depth first traversal of a graph.",null,null],[3,"Bfs","","A breadth first search (BFS) of a graph.",null,null],[12,"stack","","The queue of nodes to visit",24,null],[12,"discovered","","The map of discovered nodes",24,null],[3,"BfsIter","","An iterator for a breadth first traversal of a graph.",null,null],[3,"Topo","","A topological order traversal for a graph.",null,null],[8,"Graphlike","","Base trait for graphs that defines the node identifier.",null,null],[16,"NodeId","","",25,null],[8,"NeighborIter","","A graph trait for accessing the neighbors iterator",null,null],[16,"Iter","","",26,null],[10,"neighbors","","Return an iterator that visits all neighbors of the node **n**.",26,{"inputs":[{"name":"neighboriter"},{"name":"nodeid"}],"output":{"name":"iter"}}],[8,"NeighborsDirected","","NeighborsDirected gives access to neighbors of both `Incoming` and `Outgoing`\nedges of a node.",null,null],[16,"NeighborsDirected","","",27,null],[10,"neighbors_directed","","Return an iterator that visits all neighbors of the node **n**.",27,{"inputs":[{"name":"neighborsdirected"},{"name":"nodeid"},{"name":"edgedirection"}],"output":{"name":"neighborsdirected"}}],[8,"Externals","","Externals returns an iterator of all nodes that either have either no\nincoming or no outgoing edges.",null,null],[16,"Externals","","",28,null],[10,"externals","","Return an iterator of all nodes with no edges in the given direction",28,{"inputs":[{"name":"externals"},{"name":"edgedirection"}],"output":{"name":"externals"}}],[8,"VisitMap","","A mapping from node → is_visited.",null,null],[10,"visit","","Return **true** if the value is not already present.",29,{"inputs":[{"name":"visitmap"},{"name":"n"}],"output":{"name":"bool"}}],[10,"is_visited","","",29,{"inputs":[{"name":"visitmap"},{"name":"n"}],"output":{"name":"bool"}}],[8,"Visitable","","Trait for which datastructure to use for a graph’s visitor map",null,null],[16,"Map","","",30,null],[10,"visit_map","","",30,{"inputs":[{"name":"visitable"}],"output":{"name":"map"}}],[8,"Revisitable","","Trait for graph that can reset & resize its visitor map",null,null],[10,"reset_map","","",31,{"inputs":[{"name":"revisitable"},{"name":"map"}],"output":null}],[8,"GetAdjacencyMatrix","","Create or access the adjacency matrix of a graph",null,null],[16,"AdjMatrix","","",32,null],[10,"adjacency_matrix","","",32,{"inputs":[{"name":"getadjacencymatrix"}],"output":{"name":"adjmatrix"}}],[10,"is_adjacent","","",32,{"inputs":[{"name":"getadjacencymatrix"},{"name":"adjmatrix"},{"name":"nodeid"},{"name":"nodeid"}],"output":{"name":"bool"}}],[11,"neighbors","petgraph::graph","",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"}],"output":{"name":"neighbors"}}],[11,"neighbors","petgraph::graphmap","",3,{"inputs":[{"name":"graphmap"},{"name":"n"}],"output":{"name":"neighbors"}}],[11,"neighbors","petgraph::visit","",33,{"inputs":[{"name":"asundirected"},{"name":"nodeindex"}],"output":{"name":"neighbors"}}],[11,"neighbors","","",34,{"inputs":[{"name":"reversed"},{"name":"nodeindex"}],"output":{"name":"neighbors"}}],[11,"neighbors_directed","petgraph::graph","",12,{"inputs":[{"name":"graph"},{"name":"nodeindex"},{"name":"edgedirection"}],"output":{"name":"neighbors"}}],[11,"neighbors_directed","petgraph::visit","",34,{"inputs":[{"name":"reversed"},{"name":"nodeid"},{"name":"edgedirection"}],"output":{"name":"neighborsdirected"}}],[11,"externals","petgraph::graph","",12,{"inputs":[{"name":"graph"},{"name":"edgedirection"}],"output":{"name":"withoutedges"}}],[11,"externals","petgraph::visit","",34,{"inputs":[{"name":"reversed"},{"name":"edgedirection"}],"output":{"name":"externals"}}],[11,"visit","fixedbitset","",35,{"inputs":[{"name":"fixedbitset"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"is_visited","","",35,{"inputs":[{"name":"fixedbitset"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[11,"visit","","",35,{"inputs":[{"name":"fixedbitset"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"is_visited","","",35,{"inputs":[{"name":"fixedbitset"},{"name":"edgeindex"}],"output":{"name":"bool"}}],[11,"visit","std::collections::hash::set","",36,{"inputs":[{"name":"hashset"},{"name":"n"}],"output":{"name":"bool"}}],[11,"is_visited","","",36,{"inputs":[{"name":"hashset"},{"name":"n"}],"output":{"name":"bool"}}],[11,"visit_map","petgraph::graph","",12,{"inputs":[{"name":"graph"}],"output":{"name":"fixedbitset"}}],[11,"reset_map","","",12,{"inputs":[{"name":"graph"},{"name":"map"}],"output":null}],[11,"reset_map","petgraph::visit","",34,{"inputs":[{"name":"reversed"},{"name":"map"}],"output":null}],[11,"visit_map","petgraph::graphmap","",3,{"inputs":[{"name":"graphmap"}],"output":{"name":"hashset"}}],[11,"reset_map","","",3,{"inputs":[{"name":"graphmap"},{"name":"map"}],"output":null}],[11,"visit_map","petgraph::visit","",33,{"inputs":[{"name":"asundirected"}],"output":{"name":"map"}}],[11,"visit_map","","",34,{"inputs":[{"name":"reversed"}],"output":{"name":"map"}}],[11,"adjacency_matrix","petgraph::graphmap","",3,{"inputs":[{"name":"graphmap"}],"output":null}],[11,"is_adjacent","","",3,null],[11,"fmt","petgraph::visit","",23,{"inputs":[{"name":"dfs"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",23,{"inputs":[{"name":"dfs"}],"output":{"name":"dfs"}}],[11,"new","","Create a new **Dfs**, using the graph's visitor map, and put **start**\nin the stack of nodes to visit.",23,{"inputs":[{"name":"dfs"},{"name":"g"},{"name":"n"}],"output":{"name":"self"}}],[11,"empty","","Create a new **Dfs** using the graph's visitor map, and no stack.",23,{"inputs":[{"name":"dfs"},{"name":"g"}],"output":{"name":"self"}}],[11,"move_to","","Keep the discovered map, but clear the visit stack and restart\nthe dfs from a particular node.",23,{"inputs":[{"name":"dfs"},{"name":"n"}],"output":null}],[11,"next","","Return the next node in the dfs, or **None** if the traversal is done.",23,{"inputs":[{"name":"dfs"},{"name":"g"}],"output":{"name":"option"}}],[11,"new","","",37,{"inputs":[{"name":"dfsiter"},{"name":"g"},{"name":"nodeid"}],"output":{"name":"self"}}],[11,"move_to","","Keep the discovered map, but clear the visit stack and restart\nthe DFS traversal from a particular node.",37,{"inputs":[{"name":"dfsiter"},{"name":"nodeid"}],"output":null}],[11,"next","","",37,{"inputs":[{"name":"dfsiter"}],"output":{"name":"option"}}],[11,"size_hint","","",37,null],[11,"clone","","",37,{"inputs":[{"name":"dfsiter"}],"output":{"name":"self"}}],[11,"clone","","",24,{"inputs":[{"name":"bfs"}],"output":{"name":"bfs"}}],[11,"new","","Create a new **Bfs**, using the graph's visitor map, and put **start**\nin the stack of nodes to visit.",24,{"inputs":[{"name":"bfs"},{"name":"g"},{"name":"n"}],"output":{"name":"self"}}],[11,"next","","Return the next node in the dfs, or **None** if the traversal is done.",24,{"inputs":[{"name":"bfs"},{"name":"g"}],"output":{"name":"option"}}],[11,"new","","",38,{"inputs":[{"name":"bfsiter"},{"name":"g"},{"name":"nodeid"}],"output":{"name":"self"}}],[11,"next","","",38,{"inputs":[{"name":"bfsiter"}],"output":{"name":"option"}}],[11,"size_hint","","",38,null],[11,"clone","","",38,{"inputs":[{"name":"bfsiter"}],"output":{"name":"self"}}],[11,"clone","","",39,{"inputs":[{"name":"topo"}],"output":{"name":"topo"}}],[11,"new","","Create a new **Topo**, using the graph's visitor map, and put all\ninitial nodes in the to visit list.",39,{"inputs":[{"name":"topo"},{"name":"g"}],"output":{"name":"self"}}],[11,"reset","","Clear visited state, and put all initial nodes in the to visit list.",39,{"inputs":[{"name":"topo"},{"name":"g"}],"output":null}],[11,"next","","Return the next node in the current topological order traversal, or\n`None` if the traversal is at end.",39,{"inputs":[{"name":"topo"},{"name":"g"}],"output":{"name":"option"}}],[0,"unionfind","petgraph","`UnionFind<K>` is a disjoint-set data structure.",null,null],[3,"UnionFind","petgraph::unionfind","`UnionFind<K>` is a disjoint-set data structure. It tracks set membership of *n* elements\nindexed from *0* to *n - 1*. The scalar type is `K` which must be an unsigned integer type.",null,null],[11,"clone","","",40,{"inputs":[{"name":"unionfind"}],"output":{"name":"unionfind"}}],[11,"fmt","","",40,{"inputs":[{"name":"unionfind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `UnionFind` of `n` disjoint sets.",40,{"inputs":[{"name":"unionfind"},{"name":"usize"}],"output":{"name":"self"}}],[11,"find","","Return the representative for `x`.",40,{"inputs":[{"name":"unionfind"},{"name":"k"}],"output":{"name":"k"}}],[11,"find_mut","","Return the representative for `x`.",40,{"inputs":[{"name":"unionfind"},{"name":"k"}],"output":{"name":"k"}}],[11,"union","","Unify the two sets containing `x` and `y`.",40,{"inputs":[{"name":"unionfind"},{"name":"k"},{"name":"k"}],"output":{"name":"bool"}}],[11,"into_labeling","","Return a vector mapping each element to its representative.",40,{"inputs":[{"name":"unionfind"}],"output":{"name":"vec"}}],[11,"adjacency_matrix","petgraph::graph","",12,{"inputs":[{"name":"graph"}],"output":{"name":"fixedbitset"}}],[11,"is_adjacent","","",12,{"inputs":[{"name":"graph"},{"name":"fixedbitset"},{"name":"nodeindex"},{"name":"nodeindex"}],"output":{"name":"bool"}}],[8,"EdgeType","petgraph","A graph's edge type determines whether is has directed edges or not.",null,null],[10,"is_directed","","",41,{"inputs":[{"name":"edgetype"}],"output":{"name":"bool"}}],[8,"IntoWeightedEdge","","Convert an element like `(i, j)` or `(i, j, w)` into\na triple of source, target, edge weight.",null,null],[10,"into_weighted_edge","","",42,null],[11,"eq","","",0,{"inputs":[{"name":"edgedirection"},{"name":"edgedirection"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"edgedirection"},{"name":"edgedirection"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"edgedirection"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"edgedirection"}],"output":{"name":"edgedirection"}}],[11,"fmt","","",43,{"inputs":[{"name":"directed"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",43,{"inputs":[{"name":"directed"}],"output":{"name":"directed"}}],[11,"fmt","","",44,{"inputs":[{"name":"undirected"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",44,{"inputs":[{"name":"undirected"}],"output":{"name":"undirected"}}],[11,"is_directed","","",43,{"inputs":[{"name":"directed"}],"output":{"name":"bool"}}],[11,"is_directed","","",44,{"inputs":[{"name":"undirected"}],"output":{"name":"bool"}}],[11,"clone","","",45,{"inputs":[{"name":"ptr"}],"output":{"name":"self"}}],[11,"eq","","Ptr compares by pointer equality, i.e if they point to the same value",45,{"inputs":[{"name":"ptr"},{"name":"ptr"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",45,{"inputs":[{"name":"ptr"},{"name":"ptr"}],"output":{"name":"option"}}],[11,"cmp","","Ptr is ordered by pointer value, i.e. an arbitrary but stable and total order.",45,{"inputs":[{"name":"ptr"},{"name":"ptr"}],"output":{"name":"ordering"}}],[11,"deref","","",45,{"inputs":[{"name":"ptr"}],"output":{"name":"t"}}],[11,"hash","","",45,{"inputs":[{"name":"ptr"},{"name":"h"}],"output":null}],[11,"fmt","","",45,{"inputs":[{"name":"ptr"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"EdgeDirection"],[3,"MinScored"],[3,"Edges"],[3,"GraphMap"],[3,"Nodes"],[3,"Neighbors"],[3,"AllEdges"],[3,"Node"],[3,"Edge"],[8,"IndexType"],[3,"NodeIndex"],[3,"EdgeIndex"],[3,"Graph"],[3,"WithoutEdges"],[3,"Neighbors"],[3,"Edges"],[3,"NodeWeightsMut"],[3,"EdgeWeightsMut"],[3,"WalkEdges"],[3,"NodeIndices"],[3,"EdgeIndices"],[4,"Config"],[3,"Dot"],[3,"Dfs"],[3,"Bfs"],[8,"Graphlike"],[8,"NeighborIter"],[8,"NeighborsDirected"],[8,"Externals"],[8,"VisitMap"],[8,"Visitable"],[8,"Revisitable"],[8,"GetAdjacencyMatrix"],[3,"AsUndirected"],[3,"Reversed"],[3,"FixedBitSet"],[3,"HashSet"],[3,"DfsIter"],[3,"BfsIter"],[3,"Topo"],[3,"UnionFind"],[8,"EdgeType"],[8,"IntoWeightedEdge"],[3,"Directed"],[3,"Undirected"],[3,"Ptr"]]};
searchIndex['fixedbitset'] = {"items":[[0,"","fixedbitset","**FixedBitSet** is a simple fixed size set of bits.",null,null],[3,"FixedBitSet","","**FixedBitSet** is a simple fixed size set of bits that can\nbe enabled (1 / **true**) or disabled (0 / **false**).",null,null],[11,"hash","","",0,null],[11,"cmp","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"fixedbitset"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"with_capacity","","Create a new **FixedBitSet** with a specific number of bits,\nall initially clear.",0,{"inputs":[{"name":"fixedbitset"},{"name":"usize"}],"output":{"name":"self"}}],[11,"len","","Return the length of the **FixedBitSet** in bits.",0,{"inputs":[{"name":"fixedbitset"}],"output":{"name":"usize"}}],[11,"contains","","Return **true** if the bit is enabled in the **FixedBitSet**,\n**false** otherwise.",0,{"inputs":[{"name":"fixedbitset"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clear","","Clear all bits.",0,{"inputs":[{"name":"fixedbitset"}],"output":null}],[11,"insert","","**Panics** if **bit** is out of bounds.",0,{"inputs":[{"name":"fixedbitset"},{"name":"usize"}],"output":null}],[11,"set","","**Panics** if **bit** is out of bounds.",0,{"inputs":[{"name":"fixedbitset"},{"name":"usize"},{"name":"bool"}],"output":null}],[11,"as_slice","","View the bitset as a slice of `u32` blocks",0,null],[11,"as_mut_slice","","View the bitset as a mutable slice of `u32` blocks. Writing past the bitlength in the last\nwill cause `contains` to return potentially incorrect results for bits past the bitlength.",0,null],[11,"clone","","",0,{"inputs":[{"name":"fixedbitset"}],"output":{"name":"self"}}],[11,"index","","",0,{"inputs":[{"name":"fixedbitset"},{"name":"usize"}],"output":{"name":"bool"}}]],"paths":[[3,"FixedBitSet"]]};
initSearch(searchIndex);