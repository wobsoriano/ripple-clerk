type AnyObject = {};

interface MountProps {
	mount: (node: HTMLDivElement, props: AnyObject) => void;
	unmount: (node: HTMLDivElement) => void;
	updateProps: (props: AnyObject) => void;
	props?: AnyObject;
}

interface OpenProps {
	open: (props: AnyObject) => void;
	close: () => void;
	props?: AnyObject;
}

const isMountProps = (props: AnyObject): /* Unknown: TSTypePredicate */ => {
	return 'mount' in props;
};

const isOpenProps = (props: AnyObject): /* Unknown: TSTypePredicate */ => {
	return 'open' in props;
};

export function clerkHostRenderer(props: MountProps | OpenProps) {
	return (node: HTMLDivElement) => {
		if (isMountProps(props)) {
			props.mount(node, props.props);
		} else if (isOpenProps(props)) {
			props.open(props.props);
		}

		return () => {
			if (isMountProps(props)) {
				props.unmount(node);
			} else if (isOpenProps(props)) {
				props.close();
			}
		};
	};
}
