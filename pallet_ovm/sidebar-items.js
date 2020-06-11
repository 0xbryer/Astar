initSidebarItems({"enum":[["Call","Dispatchable calls."],["Decision","The game decision by predicates."],["Error","Error for the staking module."],["RawEvent","Events for this module."]],"macro":[["try_or_exec_error","Evaluate an expression of type Result<_, &'static str> and either resolve to the value if Ok or wrap the error string into an ExecutionError with the provided buffer and return from the enclosing function. This macro is used instead of .map_err(..)? in order to avoid taking ownership of buffer unless there is an error."]],"mod":[["predicate",""],["traits",""]],"struct":[["ChallengeGame","ChallengeGame is a part of L2 dispute. It's instantiated by claiming property. The client can get a game instance from this module."],["Config","In-memory cache of configuration values."],["CurrentSchedule","Current cost schedule for contracts."],["GenesisConfig","Genesis config for the module, allow to build genesis storage."],["InstantiatedGames","Mapping the game id to Challenge Game."],["Module",""],["PredicateCache","A mapping between an original code hash and instrumented ovm(predicate) code, ready for execution."],["PredicateCodes","A mapping from an original code hash to the original code, untouched by instrumentation."],["PredicateContract","PredicateContract wrapped Predicate and initial arguments."],["Predicates","Mapping the predicate address to Predicate. Predicate is handled similar to contracts."],["Property","Property stands for dispute logic and we can claim every Properties to Adjudicator Contract. Property has its predicate address and array of input."],["Schedule","Definition of the cost schedule and other parameterizations for optimistic virtual machine."]],"trait":[["Trait",""]],"type":[["Event","[`RawEvent`] specialized for the configuration [`Trait`]"]]});