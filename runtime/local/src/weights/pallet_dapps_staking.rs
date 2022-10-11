
//! Autogenerated weights for `pallet_dapps_staking`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2022-03-07, STEPS: `30`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("shibuya-dev"), DB CACHE: 1024

// Executed Command:
// ./target/release/astar-collator
// benchmark
// --chain
// shibuya-dev
// --execution
// wasm
// --wasm-execution
// compiled
// --pallet
// pallet_dapps_staking
// --steps
// 30
// --repeat
// 20
// --extrinsic
// *
// --output
// .

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for `pallet_dapps_staking`.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> pallet_dapps_staking::WeightInfo for WeightInfo<T> {
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDevelopers (r:1 w:1)
	// Storage: DappsStaking RegisteredDapps (r:1 w:1)
	// Storage: DappsStaking PreApprovalIsEnabled (r:1 w:0)
	fn register() -> Weight {
		Weight::from_ref_time(32_139_000 as u64)
			.saturating_add(T::DbWeight::get().reads(4 as u64))
			.saturating_add(T::DbWeight::get().writes(2 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDapps (r:1 w:1)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: System Account (r:1 w:1)
	fn unregister() -> Weight {
		Weight::from_ref_time(31_929_000 as u64)
			.saturating_add(T::DbWeight::get().reads(4 as u64))
			.saturating_add(T::DbWeight::get().writes(2 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDapps (r:1 w:0)
	// Storage: DappsStaking StakersInfo (r:1 w:1)
	// Storage: DappsStaking Ledger (r:1 w:1)
	// Storage: Balances Locks (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking GeneralEraInfo (r:1 w:1)
	fn withdraw_from_unregistered() -> Weight {
		Weight::from_ref_time(46_667_000 as u64)
			.saturating_add(T::DbWeight::get().reads(8 as u64))
			.saturating_add(T::DbWeight::get().writes(5 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking PreApprovalIsEnabled (r:0 w:1)
	fn enable_developer_pre_approval() -> Weight {
		Weight::from_ref_time(2_745_000 as u64)
			.saturating_add(T::DbWeight::get().reads(1 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking PreApprovedDevelopers (r:1 w:1)
	fn developer_pre_approval() -> Weight {
		Weight::from_ref_time(5_320_000 as u64)
			.saturating_add(T::DbWeight::get().reads(2 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDapps (r:1 w:0)
	// Storage: DappsStaking Ledger (r:1 w:1)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking ContractEraStake (r:1 w:1)
	// Storage: DappsStaking StakersInfo (r:1 w:1)
	// Storage: DappsStaking GeneralEraInfo (r:1 w:1)
	// Storage: Balances Locks (r:1 w:1)
	fn bond_and_stake() -> Weight {
		Weight::from_ref_time(133_638_000 as u64)
			.saturating_add(T::DbWeight::get().reads(8 as u64))
			.saturating_add(T::DbWeight::get().writes(5 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDapps (r:1 w:0)
	// Storage: DappsStaking StakersInfo (r:1 w:1)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking ContractEraStake (r:1 w:1)
	// Storage: DappsStaking Ledger (r:1 w:1)
	// Storage: Balances Locks (r:1 w:1)
	// Storage: DappsStaking GeneralEraInfo (r:1 w:1)
	fn unbond_and_unstake() -> Weight {
		Weight::from_ref_time(134_480_000 as u64)
			.saturating_add(T::DbWeight::get().reads(8 as u64))
			.saturating_add(T::DbWeight::get().writes(5 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking Ledger (r:1 w:1)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: Balances Locks (r:1 w:1)
	// Storage: DappsStaking GeneralEraInfo (r:1 w:1)
	fn withdraw_unbonded() -> Weight {
		Weight::from_ref_time(114_252_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(3 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking GeneralStakerInfo (r:1 w:1)
	// Storage: DappsStaking RegisteredDapps (r:1 w:0)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking ContractEraStake (r:1 w:1)
	// Storage: DappsStaking GeneralEraInfo (r:2 w:1)
	// Storage: DappsStaking Ledger (r:1 w:1)
	// Storage: Balances Locks (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn claim_staker_with_restake() -> Weight {
		Weight::from_ref_time(91_000_000 as u64)
			.saturating_add(T::DbWeight::get().reads(10 as u64))
			.saturating_add(T::DbWeight::get().writes(6 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking GeneralStakerInfo (r:1 w:1)
	// Storage: DappsStaking RegisteredDapps (r:1 w:0)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking ContractEraStake (r:1 w:0)
	// Storage: DappsStaking GeneralEraInfo (r:1 w:0)
	// Storage: DappsStaking Ledger (r:1 w:0)
	fn claim_staker_without_restake() -> Weight {
		Weight::from_ref_time(56_000_000 as u64)
			.saturating_add(T::DbWeight::get().reads(7 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDapps (r:2 w:0)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking GeneralStakerInfo (r:2 w:2)
	// Storage: DappsStaking ContractEraStake (r:2 w:2)
	fn nomination_transfer() -> Weight {
		Weight::from_ref_time(56_495_000 as u64)
			.saturating_add(T::DbWeight::get().reads(8 as u64))
			.saturating_add(T::DbWeight::get().writes(4 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking RegisteredDapps (r:1 w:0)
	// Storage: DappsStaking CurrentEra (r:1 w:0)
	// Storage: DappsStaking ContractEraStake (r:1 w:1)
	// Storage: DappsStaking GeneralEraInfo (r:1 w:0)
	fn claim_dapp() -> Weight {
		Weight::from_ref_time(31_619_000 as u64)
			.saturating_add(T::DbWeight::get().reads(5 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking ForceEra (r:0 w:1)
	fn force_new_era() -> Weight {
		Weight::from_ref_time(2_815_000 as u64)
			.saturating_add(T::DbWeight::get().reads(1 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:1)
	fn maintenance_mode() -> Weight {
		Weight::from_ref_time(10_970_000 as u64)
			.saturating_add(T::DbWeight::get().reads(1 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
	// Storage: DappsStaking PalletDisabled (r:1 w:0)
	// Storage: DappsStaking Ledger (r:1 w:1)
	fn set_reward_destination() -> Weight {
		Weight::from_ref_time(24_000_000 as u64)
			.saturating_add(T::DbWeight::get().reads(2 as u64))
			.saturating_add(T::DbWeight::get().writes(1 as u64))
	}
}