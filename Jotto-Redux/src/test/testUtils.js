import checkPropTypes from 'check-prop-types'
import rootReducer from '../reducers'
import { createStore, applyMiddleware } from 'redux'
import { middleware } from '../setupStore'

/**
 * Store Factory.
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(
        createStore
    )
    return createStoreWithMiddleware(rootReducer, initialState)
}

/**
 * Find by test Attribute.
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}
