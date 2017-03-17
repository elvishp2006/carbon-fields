/**
 * The external dependencies.
 */
import React from 'react';
import cx from 'classnames';

/**
 * The internal dependencies.
 */
import fieldFactory from 'fields/factory';

/**
 * The base component used to render the containers.
 *
 * @param  {Object}        props
 * @param  {Object}        props.container
 * @param  {Object[]}      props.fields
 * @param  {React.Element} props.children
 * @return {React.Element}
 */
const ContainerBase = ({ container, fields, children }) => {
	const classes = [
		'carbon-container',
		`carbon-container-${container.id}`,
		`carbon-container-${container.type}`,
		...container.classes,
	];

	return <div className={cx(classes)}>
		{children}

		{
			fields.map(({ id, type }) => fieldFactory(type, { id }))
		}
	</div>;
};

export default ContainerBase;