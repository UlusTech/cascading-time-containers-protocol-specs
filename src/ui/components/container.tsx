type ContainerViewProps = { id: string; cascade: string[] };

export const ContainerView = (props: ContainerViewProps) => (
	<section>
		<h2>{props.id}</h2>
		<ul>
			{props.cascade.map((child) => (
				<li>{child}</li>
			))}
		</ul>
	</section>
);
