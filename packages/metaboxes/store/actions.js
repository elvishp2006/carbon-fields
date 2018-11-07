/**
 * Returns an action object used to setup the state when first opening an editor.
 *
 * @param  {Object[]} containers
 * @param  {Object}   fields
 * @return {Object}
 */
export function setupState( containers, fields ) {
	return {
		type: 'SETUP_STATE',
		payload: {
			containers,
			fields
		}
	};
}

/**
 * Returns an action object used to update the field's value.
 *
 * @param  {string} fieldId
 * @param  {mixed}  value
 * @return {Object}
 */
export function updateFieldValue( fieldId, value ) {
	return {
		type: 'UPDATE_FIELD_VALUE',
		payload: {
			fieldId,
			value
		}
	};
}

/**
 * Returns an action object used to update the container's meta.
 *
 * @param  {string} containerId
 * @param  {string} key
 * @param  {mixed}  value
 * @return {Object}
 */
export function updateContainerMeta( containerId, key, value ) {
	return {
		type: 'UPDATE_CONTAINER_META',
		payload: {
			containerId,
			key,
			value
		}
	};
}

/**
 * Returns an action object used to add the fields.
 *
 * @param  {Object[]} fields
 * @return {Object}
 */
export function addFields( fields ) {
	return {
		type: 'ADD_FIELDS',
		payload: {
			fields
		}
	};
}

/**
 * Returns an action object used to remove the fields.
 *
 * @param  {string[]} fieldIds
 * @return {Object}
 */
export function removeFields( fieldIds ) {
	return {
		type: 'REMOVE_FIELDS',
		payload: {
			fieldIds
		}
	};
}

/**
 * Returns an actions object used to add the created sidebar to all fields.
 *
 * @param  {Object} sidebar
 * @return {Object}
 */
export function receiveSidebar( sidebar ) {
	return {
		type: 'RECEIVE_SIDEBAR',
		payload: sidebar
	};
}
