/**
 * In TS, decorators are a bit more powerful the normal higher order functions
 */

// https://www.youtube.com/watch?v=c9BqoqzFMeM
// Example Packages:
// 0. https://www.npmjs.com/package/typegoose 📈
// 1. https://www.npmjs.com/package/class-validator 🎖
// 2. https://typegraphql.com/ 👷

// Decorators vs HOC/HOF
// Decorators are only applicable to things that have a this binding.
// Both enhance features of the functions/closures/classes they wrap.

// Example Usage
export function ValidateInput(target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): any {}

export function AuditedAction(actionName) {
  return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): any {}
}

type PointCut = 'onEnter' | 'onExit' | 'onError'

export function Logged(pointCuts: PointCut[]): ClassDecorator {
  return function (target: Object, key: string, descriptor: TypedPropertyDescriptor<any>): any {}
}

@Logged(['onEnter', 'onError'])
export class LoanApplicationManager {
  @ValidateInput
  public start(payload) {}

  // Gets evaluated in the order of declaration
  @ValidateInput
  @AuditedAction('LOAN_APPLICATION::APPROVE')
  approve(applicationId) {}

  @AuditedAction('LOADN_APPLICATION::REJECT')
  reject(applicationId) {}

  @AuditedAction('')
  putOnHold(applicationId) {}
}
