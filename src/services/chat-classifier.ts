import { Engine } from 'json-rules-engine'
import { getRegion } from 'services/region'
const { rules } = getRegion()

export const isRule = rule =>
  typeof rule === 'object' && !!rule.conditions && !!rule.event

export const isDefined = value => value !== undefined

export const stepHasValue = step => isDefined(step.value)

export const getRulesFromChatSteps = (steps = []) =>
  steps.map(step => step && step.metadata && step.metadata.rule).filter(isRule)

export const getFactsFromChatSteps = (steps = []) =>
  steps
    .filter(stepHasValue)
    .reduce((facts, step) => ({ ...facts, [step.id]: step.value }), {})

export const getClassesFromRuleResults = ({ events }) =>
  events
    .flatMap(event => event && event.params && event.params.classes)
    .filter(isDefined)

export const getChatClassesFromSteps = steps => {
  const answeredSteps = Object.values(steps).filter(
    (step: any) => step.value !== undefined
  )

  // TODO: Check if there's a way to clear rule set and reuse instance
  // One-time use.
  let engine = new Engine()

  // Load rules defined in global rule set
  rules.forEach(rule => engine.addRule(rule))

  // Load rules defined on steps
  const stepRules = getRulesFromChatSteps(answeredSteps)
  stepRules.forEach(rule => engine.addRule(rule))

  // Extract facts from the chat values
  const facts = getFactsFromChatSteps(answeredSteps)

  const cleanUp = () => {
    // Clean up
    engine = null
  }

  // Run the engine to evaluate, return promise
  return engine
    .run(facts)
    .then(getClassesFromRuleResults)
    .finally(cleanUp)
}
