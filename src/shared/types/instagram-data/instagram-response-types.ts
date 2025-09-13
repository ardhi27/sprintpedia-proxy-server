import * as z from "zod";

export const ActiveStandaloneFundraisersSchema = z.object({
  fundraisers: z.array(z.any()),
  total_count: z.number(),
});
export type ActiveStandaloneFundraisers = z.infer<
  typeof ActiveStandaloneFundraisersSchema
>;

export const AvatarStatusSchema = z.object({
  has_avatar: z.boolean(),
});
export type AvatarStatus = z.infer<typeof AvatarStatusSchema>;

export const BioLinkSchema = z.object({
  creation_source: z.string(),
  icon_url: z.string(),
  image_url: z.string(),
  is_pinned: z.boolean(),
  is_verified: z.boolean(),
  link_id: z.number(),
  link_type: z.string(),
  lynx_url: z.string(),
  media_accent_color_hex: z.string(),
  media_type: z.string(),
  open_external_url_with_in_app_browser: z.boolean(),
  title: z.string(),
  url: z.string(),
});
export type BioLink = z.infer<typeof BioLinkSchema>;

export const BiographyWithEntitiesSchema = z.object({
  entities: z.array(z.any()),
  raw_text: z.string(),
});
export type BiographyWithEntities = z.infer<typeof BiographyWithEntitiesSchema>;

export const ChainingInfoSchema = z.object({
  algorithm: z.null(),
  sources: z.string(),
});
export type ChainingInfo = z.infer<typeof ChainingInfoSchema>;

export const CreatorShoppingInfoSchema = z.object({
  linked_merchant_accounts: z.array(z.any()),
});
export type CreatorShoppingInfo = z.infer<typeof CreatorShoppingInfoSchema>;

export const FanClubInfoSchema = z.object({
  autosave_to_exclusive_highlight: z.null(),
  connected_member_count: z.null(),
  fan_club_id: z.null(),
  fan_club_name: z.null(),
  fan_consideration_page_revamp_eligiblity: z.null(),
  has_created_ssc: z.null(),
  has_enough_subscribers_for_ssc: z.null(),
  is_fan_club_gifting_eligible: z.null(),
  is_fan_club_referral_eligible: z.null(),
  is_free_trial_eligible: z.null(),
  largest_public_bc_id: z.null(),
  subscriber_count: z.null(),
});
export type FanClubInfo = z.infer<typeof FanClubInfoSchema>;

export const HdProfilePicSchema = z.object({
  height: z.number(),
  url: z.string(),
  width: z.number(),
});
export type HdProfilePic = z.infer<typeof HdProfilePicSchema>;

export const LocationDataSchema = z.object({
  address_street: z.null(),
  city_id: z.null(),
  city_name: z.null(),
  instagram_location_id: z.null(),
  latitude: z.null(),
  longitude: z.null(),
  zip: z.null(),
});
export type LocationData = z.infer<typeof LocationDataSchema>;

export const MetaVerifiedBenefitsInfoSchema = z.object({
  active_meta_verified_benefits: z.array(z.any()),
  is_eligible_for_meta_verified_content_protection: z.boolean(),
});
export type MetaVerifiedBenefitsInfo = z.infer<
  typeof MetaVerifiedBenefitsInfoSchema
>;

export const SelectedThemeColorElementSchema = z.object({
  display_label: z.string(),
  int_value: z.number(),
});
export type SelectedThemeColorElement = z.infer<
  typeof SelectedThemeColorElementSchema
>;

export const NotMetaVerifiedFrictionInfoSchema = z.object({
  is_eligible_for_label_friction: z.boolean(),
  label_friction_content: z.string(),
});
export type NotMetaVerifiedFrictionInfo = z.infer<
  typeof NotMetaVerifiedFrictionInfoSchema
>;

export const PinnedChannelsInfoSchema = z.object({
  has_public_channels: z.boolean(),
  pinned_channels_list: z.array(z.any()),
});
export type PinnedChannelsInfo = z.infer<typeof PinnedChannelsInfoSchema>;

export const ProfileOverlayInfoSchema = z.object({
  bloks_payload: z.null(),
  overlay_format: z.string(),
});
export type ProfileOverlayInfo = z.infer<typeof ProfileOverlayInfoSchema>;

export const RecsFromFriendsSchema = z.object({
  enable_recs_from_friends: z.boolean(),
  recs_from_friends_entry_point_type: z.string(),
});
export type RecsFromFriends = z.infer<typeof RecsFromFriendsSchema>;

export const RingCreatorMetadataSchema = z.object({});
export type RingCreatorMetadata = z.infer<typeof RingCreatorMetadataSchema>;

export const ChainingSchema = z.object({
  chaining_info: ChainingInfoSchema,
  full_name: z.string(),
  id: z.string(),
  is_private: z.boolean(),
  is_verified: z.boolean(),
  profile_chaining_secondary_label: z.string(),
  profile_pic_id: z.string().optional(),
  profile_pic_url: z.string().optional(),
  social_context: z.string(),
  username: z.string(),
});
export type Chaining = z.infer<typeof ChainingSchema>;

export const ThemeColorSchema = z.object({
  available_theme_colors: z.array(SelectedThemeColorElementSchema),
  selected_theme_color: SelectedThemeColorElementSchema,
});
export type ThemeColor = z.infer<typeof ThemeColorSchema>;

export const NametagSchema = z.object({
  available_theme_colors: z.array(z.number()),
  background_image_url: z.string(),
  emoji: z.string(),
  emoji_color: z.number(),
  gradient: z.number(),
  is_background_image_blurred: z.boolean(),
  mode: z.number(),
  selected_theme_color: z.number(),
  selfie_sticker: z.number(),
  selfie_url: z.string(),
  theme_color: ThemeColorSchema,
});
export type Nametag = z.infer<typeof NametagSchema>;

export const DataSchema = z.object({
  about: z.null(),
  account_badges: z.array(z.any()),
  account_category: z.string(),
  account_type: z.number(),
  active_standalone_fundraisers: ActiveStandaloneFundraisersSchema,
  additional_business_addresses: z.array(z.any()),
  adjusted_banners_order: z.array(z.any()),
  ads_incentive_expiration_date: z.null(),
  ads_page_id: z.null(),
  ads_page_name: z.null(),
  allow_manage_memorialization: z.boolean(),
  auto_expand_chaining: z.boolean(),
  avatar_status: AvatarStatusSchema,
  bio_links: z.array(BioLinkSchema),
  biography: z.string(),
  biography_email: z.null(),
  biography_with_entities: BiographyWithEntitiesSchema,
  birthday_today_visibility_for_viewer: z.string(),
  can_add_fb_group_link_on_profile: z.boolean(),
  can_hide_category: z.boolean(),
  can_use_affiliate_partnership_messaging_as_brand: z.boolean(),
  can_use_affiliate_partnership_messaging_as_creator: z.boolean(),
  can_use_branded_content_discovery_as_brand: z.boolean(),
  can_use_branded_content_discovery_as_creator: z.boolean(),
  can_use_paid_partnership_messaging_as_creator: z.boolean(),
  category: z.null(),
  chaining_results: z.array(ChainingSchema),
  chaining_suggestions: z.array(ChainingSchema),
  chaining_upsell_cards: z.array(z.any()),
  creator_shopping_info: CreatorShoppingInfoSchema,
  current_catalog_id: z.null(),
  disable_profile_shop_cta: z.boolean(),
  eligible_for_text_app_activation_badge: z.boolean(),
  enable_add_school_in_edit_profile: z.boolean(),
  existing_user_age_collection_enabled: z.boolean(),
  external_lynx_url: z.string(),
  external_url: z.string(),
  fan_club_info: FanClubInfoSchema,
  fbid_v2: z.string(),
  feed_post_reshare_disabled: z.boolean(),
  follow_friction_type: z.number(),
  follower_count: z.number(),
  following_count: z.number(),
  full_name: z.string(),
  has_anonymous_profile_picture: z.boolean(),
  has_chaining: z.boolean(),
  has_collab_collections: z.boolean(),
  has_ever_selected_topics: z.boolean(),
  has_exclusive_feed_content: z.boolean(),
  has_fan_club_subscriptions: z.boolean(),
  has_gen_ai_personas_for_profile_banner: z.boolean(),
  has_guides: z.boolean(),
  has_highlight_reels: z.boolean(),
  has_ig_profile: z.boolean(),
  has_music_on_profile: z.boolean(),
  has_nme_badge: z.boolean(),
  has_private_collections: z.boolean(),
  has_public_tab_threads: z.boolean(),
  has_videos: z.boolean(),
  has_views_fetching: z.boolean(),
  hd_profile_pic_url_info: HdProfilePicSchema,
  hd_profile_pic_versions: z.array(HdProfilePicSchema),
  highlight_reshare_disabled: z.boolean(),
  highlights_tray_type: z.string(),
  id: z.string(),
  include_direct_blacklist_status: z.boolean(),
  instagram_pk: z.string(),
  interop_messaging_user_fbid: z.number(),
  is_active_on_text_post_app: z.boolean(),
  is_auto_confirm_enabled_for_all_reciprocal_follow_requests: z.boolean(),
  is_bestie: z.boolean(),
  is_business: z.boolean(),
  is_call_to_action_enabled: z.null(),
  is_cannes: z.boolean(),
  is_category_tappable: z.boolean(),
  is_coppa_enforced: z.boolean(),
  is_creator_agent_enabled: z.boolean(),
  is_direct_roll_call_enabled: z.boolean(),
  is_eligible_for_creator_product_links: z.boolean(),
  is_eligible_for_meta_verified_enhanced_link_sheet: z.boolean(),
  is_eligible_for_meta_verified_enhanced_link_sheet_consumption: z.boolean(),
  is_eligible_for_meta_verified_ig_self_profile_not_verified_badge: z.boolean(),
  is_eligible_for_meta_verified_label: z.boolean(),
  is_eligible_for_meta_verified_links_in_post: z.boolean(),
  is_eligible_for_meta_verified_links_in_reels: z.boolean(),
  is_eligible_for_meta_verified_multiple_addresses_consumption: z.boolean(),
  is_eligible_for_meta_verified_multiple_addresses_creation: z.boolean(),
  is_eligible_for_meta_verified_related_accounts: z.boolean(),
  is_eligible_for_post_boost_mv_upsell: z.boolean(),
  is_eligible_for_request_message: z.boolean(),
  is_eligible_for_schools_search_upsell: z.boolean(),
  is_eligible_for_slide: z.boolean(),
  is_favorite: z.boolean(),
  is_favorite_for_clips: z.boolean(),
  is_favorite_for_highlights: z.boolean(),
  is_favorite_for_stories: z.boolean(),
  is_in_canada: z.boolean(),
  is_interest_account: z.boolean(),
  is_memorialized: z.boolean(),
  is_meta_verified_related_accounts_display_enabled: z.boolean(),
  is_new_to_instagram: z.boolean(),
  is_opal_enabled: z.boolean(),
  is_open_to_collab: z.boolean(),
  is_oregon_custom_gender_consented: z.boolean(),
  is_parenting_account: z.boolean(),
  is_potential_business: z.boolean(),
  is_prime_onboarding_account: z.boolean(),
  is_private: z.boolean(),
  is_profile_broadcast_sharing_enabled: z.boolean(),
  is_profile_picture_expansion_enabled: z.boolean(),
  is_profile_search_enabled: z.boolean(),
  is_recon_ad_cta_on_profile_eligible_with_viewer: z.boolean(),
  is_regulated_c18: z.boolean(),
  is_regulated_news_in_viewer_location: z.boolean(),
  is_remix_setting_enabled_for_posts: z.boolean(),
  is_remix_setting_enabled_for_reels: z.boolean(),
  is_ring_creator: z.boolean(),
  is_secondary_account_creation: z.boolean(),
  is_stories_teaser_muted: z.boolean(),
  is_supervision_features_enabled: z.boolean(),
  is_verified: z.boolean(),
  is_whatsapp_linked: z.boolean(),
  live_subscription_status: z.string(),
  location_data: LocationDataSchema,
  media_count: z.number(),
  meta_verified_benefits_info: MetaVerifiedBenefitsInfoSchema,
  meta_verified_related_accounts_count: z.number(),
  nametag: NametagSchema,
  nonpro_can_maybe_see_profile_hypercard: z.boolean(),
  not_meta_verified_friction_info: NotMetaVerifiedFrictionInfoSchema,
  open_external_url_with_in_app_browser: z.boolean(),
  page_id: z.null(),
  page_name: z.null(),
  pinned_channels_info: PinnedChannelsInfoSchema,
  posts_subscription_status: z.string(),
  primary_profile_link_type: z.number(),
  professional_conversion_suggested_account_type: z.number(),
  profile_context: z.string(),
  profile_context_facepile_users: z.array(z.any()),
  profile_context_links_with_user_ids: z.array(z.any()),
  profile_overlay_info: ProfileOverlayInfoSchema,
  profile_pic_genai_tool_info: z.array(z.any()),
  profile_pic_id: z.string(),
  profile_pic_url: z.string(),
  profile_pic_url_hd: z.string(),
  profile_reels_sorting_eligibility: z.string(),
  profile_type: z.number(),
  pronouns: z.array(z.any()),
  recs_from_friends: RecsFromFriendsSchema,
  reels_subscription_status: z.string(),
  relevant_news_regulation_locations: z.array(z.any()),
  remove_message_entrypoint: z.boolean(),
  request_contact_enabled: z.boolean(),
  ring_creator_metadata: RingCreatorMetadataSchema,
  should_show_tagged_tab: z.boolean(),
  show_account_transparency_details: z.boolean(),
  show_blue_badge_on_main_profile: z.boolean(),
  show_post_insights_entry_point: z.boolean(),
  show_ring_award: z.boolean(),
  show_schools_badge: z.null(),
  show_wa_link_on_profile: z.boolean(),
  spam_follower_setting_enabled: z.null(),
  stories_subscription_status: z.string(),
  text_app_last_visited_time: z.null(),
  third_party_downloads_enabled: z.number(),
  threads_profile_glyph_url: z.string(),
  total_ar_effects: z.number(),
  transparency_product_enabled: z.boolean(),
  trial_clips_enabled: z.boolean(),
  upcoming_events: z.array(z.any()),
  username: z.string(),
  views_on_grid_status: z.string(),
});
export type Data = z.infer<typeof DataSchema>;

export const WelcomeSchema = z.object({
  data: DataSchema,
});
export type Welcome = z.infer<typeof WelcomeSchema>;
