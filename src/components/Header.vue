<template>
	<nav id="main">
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/work">Work</a></li>
		<li><a href="/about">About</a></li>
	</ul>
	</nav>
</template>

<style scoped>
	nav {
		background:black;
		top:0;
		width: 100%;
		transition:all 0.5s;
		position: relative;
		z-index: 1;
	}

	body.fixed-nav nav {
		position: fixed;
		box-shadow:0 5px 0 rgba(0,0,0,0.1);
	}

	nav ul {
		margin: 0;
		padding:0;
		list-style: none;
		display:flex;
	}

	nav li {
		flex:1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav a {
		text-decoration: none;
		padding:20px;
		display: inline-block;
		color:white;
		transition:all 0.2s;
		text-transform: uppercase;
	}

	nav a:hover	 {
		background-color: #494949;
	}

</style>

<script>

</script>