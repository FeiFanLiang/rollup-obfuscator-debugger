/* eslint-disable */
declare namespace baseType {
  interface SelectOption {
    value: string | number;
    label: string;
  }
  interface TonTranscation {
    '@type': 'raw.transaction'
    data: string;
    fee: string;
    in_msg: {
      '@type': 'raw.message'
      body_hash: string;
      destination: string;
      fwd_fee: string;
      ihr_fee: string;
      message: string;
      msg_data: {
        '@type': 'msg.dataRaw'
        body: string;
      };
      source: string;
      value: string;
    };
    other_fee: string;
    out_msgs: {
      '@type': 'raw.message'
      body_hash: string;
      destination: string;
      fwd_fee: string;
      ihr_fee: string;
      message: string;
      msg_data: {
        '@type': 'msg.dataRaw'
        body: string;
      };
      source: string;
      value: string;
    }[];
    storage_fee: string;
    transaction_id: {
      hash: string;
      lt: string;
    };
    utime: number;
  }
}

declare module 'tronweb';
