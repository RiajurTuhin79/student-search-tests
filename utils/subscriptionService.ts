/*

Now think different way - Assume all Subscriptions(A to H) are already created in the Database .
 Now create a typeScript file for Subscription . It should have couple of functions like - 
1)  Any subscription can be assigned to the user Tuhin79@gmail.com using Api calls . 
2) Delete subscription from  Tuhin79@gmail.com using api calls .

*/
// utils/SubscriptionService.ts
import axios from 'axios';

export type SubscriptionTier = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export class SubscriptionService {
  private readonly baseUrl: string;
  private readonly authToken: string;
  private readonly userEmail: string;

  constructor(baseUrl: string, authToken: string, userEmail: string) {
    this.baseUrl = baseUrl;
    this.authToken = `Bearer ${authToken}`;
    this.userEmail = userEmail;
  }

  /**
   * Assign an existing subscription tier (A-H) to the user
   */
  async assignSubscription(tier: SubscriptionTier): Promise<string> {
    const response = await axios.post(`${this.baseUrl}/api/user-subscriptions`, {
      email: this.userEmail,
      subscriptionTier: tier,
    }, {
      headers: { Authorization: this.authToken }
    });

    console.log(`✅ Assigned subscription ${tier} to ${this.userEmail}`);
    return response.data.subscriptionId;
  }

  /**
   * Remove a subscription from the user using subscription ID
   */
  async removeSubscription(subscriptionId: string): Promise<void> {
    await axios.delete(`${this.baseUrl}/api/user-subscriptions/${subscriptionId}`, {
      headers: { Authorization: this.authToken }
    });

    console.log(`🗑️ Removed subscription ${subscriptionId} from ${this.userEmail}`);
  }
}
