/**
 * External dependencies.
 */
import cx from 'classnames';
import { Component } from '@wordpress/element';
import { BaseControl, IconButton, TextControl } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import './style.scss';

import withField from '../../components/with-field';

class AssociationField extends Component {
	/**
	 * Renders the component.
	 *
	 * @return {Object}
	 */
	render() {
		const {
			field,
			value,
			onAddItem,
			onRemoveItem,
			onQueryTermChange
		} = this.props;

		return (
			<BaseControl
				label={ field.label }
			>
				<div className="cf-field-association">
					<div className="cf-field-association__body">
						<div className="cf-field-association__search-bar">
							<TextControl
								value={ field.queryTerm }
								onChange={ onQueryTermChange }
								placeholder={ carbonFieldsL10n.field.searchPlaceholder }
							/>
						</div>

						<div className="cf-field-association__col cf-field-association__col--source">
							{
								field.options.map( ( option, index ) => {
									return (
										<div className={ cx( 'cf-field-association__option', { 'cf-field-association__option--selected': option.disabled } ) } key={ index }>
											<img className="cf-field-association__option-thumbnail" src={ option.thumbnail ? option.thumbnail : '' } />

											<span className="cf-field-association__option-title">
												{ option.title }
											</span>

											<div className="cf-field-association__option-actions">
												<IconButton
													icon="edit"
													label="Edit"
													href={ option.edit_link }
													target="_blank"
												/>

												<IconButton
													icon="plus-alt"
													label="Add"
													onClick={ () => onAddItem( option ) }
												/>
											</div>
										</div>
									);
								} )
							}
						</div>

						<div className="cf-field-association__col cf-field-association__col--selected">
							{
								value.map( ( option, index ) => {
									return (
										<div className="cf-field-association__option" key={ index }>
											<div className="cf-field-association__option-sort">

											</div>

											<img className="cf-field-association__option-thumbnail" src={ option.thumbnail ? option.thumbnail : '' } />

											<span className="cf-field-association__option-title">
												{ option.title }
											</span>

											<div className="cf-field-association__option-actions">
												<IconButton
													icon="editor-removeformatting"
													label="Remove"
													onClick={ () => onRemoveItem( option ) }
												/>
											</div>
										</div>
									);
								} )
							}
						</div>
					</div>
				</div>
			</BaseControl>
		);
	}
}

const applyWithDispatch = withDispatch( ( dispatch ) => {
	const { fetchAssociationOptions } = dispatch( 'carbon-fields/blocks' );

	return {
		onFetchOptions: fetchAssociationOptions
	};
} );

addFilter( 'carbon-fields.association-field.block', 'carbon-fields/blocks', ( OriginalAssociationField ) => compose(
	withField,
	applyWithDispatch
)( ( props ) => {
	return (
		<OriginalAssociationField { ...props }>
			{ ( {
				field,
				value,
				handleChange,
				handleAddItem,
				handleRemoveItem,
				handleQueryTermChange
			} ) => (
				<AssociationField
					field={ field }
					value={ value }
					onChange={ handleChange }
					onAddItem={ handleAddItem }
					onRemoveItem={ handleRemoveItem }
					onQueryTermChange={ handleQueryTermChange }
				/>
			) }
		</OriginalAssociationField>
	);
} ) );
