/** @securist/tarx-bridge */
export const packageId = 'tarx-bridge' as const
export const org = 'securist' as const
export function banner(): string {
  return `[Securist] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
