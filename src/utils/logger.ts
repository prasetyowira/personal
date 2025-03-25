type LogContext = 
  | 'api' | 'audit' | 'auth' | 'cache' | 'cleanup' | 'config' | 'data' 
  | 'db' | 'email' | 'error' | 'export' | 'file' | 'format' | 'health' 
  | 'helper' | 'import' | 'metrics' | 'migration' | 'network' | 'perf' 
  | 'queue' | 'security' | 'session' | 'storage' | 'sync' | 'system' 
  | 'task' | 'template' | 'test' | 'ui' | 'user' | 'user-pref' 
  | 'user-profile' | 'user-activity' | 'user-content' | 'validation';

type LogLevel = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';

interface ErrorLogParams {
  filename: string;
  context: LogContext;
  error: {
    code: string;
    message: string;
    stack?: string;
    type?: string;
  };
  impact: string;
  recovery?: string[];
  data?: Record<string, any>;
  metrics?: {
    duration?: number;
    attempts?: number;
  };
}

interface WarnLogParams {
  filename: string;
  context: LogContext;
  warning: {
    type: string;
    details: Record<string, any>;
  };
  impact: string;
  action: string[];
  metrics?: {
    threshold?: number;
    current?: number;
    trend?: string;
  };
}

interface InfoLogParams {
  filename: string;
  context: LogContext;
  operation: {
    name: string;
    status: string;
    result?: any;
  };
  metrics?: {
    duration?: number;
    size?: number;
  };
  data?: Record<string, any>;
}

interface DebugLogParams {
  filename: string;
  context: LogContext;
  technical: {
    function?: string;
    state?: Record<string, any>;
    args?: Record<string, any>;
  };
  trace?: {
    step: number;
    total: number;
  };
  data?: Record<string, any>;
}

// Format metadata as key=value
const formatMetadata = (metadata: Record<string, any>): string => {
  return Object.entries(metadata)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return `${key}=${JSON.stringify(value)}`;
      }
      return `${key}=${value}`;
    })
    .join(' • ');
};

// Main logger implementation
export const logger = {
  error(message: string, params: ErrorLogParams): void {
    const timestamp = new Date().toISOString();
    const { filename, context, error, impact, recovery, data, metrics } = params;
    
    // Prepare metadata
    const metadata: Record<string, any> = {
      error: {
        code: error.code,
        message: error.message,
        type: error.type
      },
      impact
    };
    
    if (recovery) metadata.recovery = recovery;
    if (data) metadata.data = data;
    if (metrics) metadata.metrics = metrics;
    
    console.error(
      `${timestamp} ┃ [ERROR] ┃ [${context}] ┃ [${filename}] ┃ ${message} ┃ ${formatMetadata(metadata)}`
    );
  },
  
  warn(message: string, params: WarnLogParams): void {
    const timestamp = new Date().toISOString();
    const { filename, context, warning, impact, action, metrics } = params;
    
    // Prepare metadata
    const metadata: Record<string, any> = {
      warning: {
        type: warning.type,
        details: warning.details
      },
      impact,
      action
    };
    
    if (metrics) metadata.metrics = metrics;
    
    console.warn(
      `${timestamp} ┃ [WARN] ┃ [${context}] ┃ [${filename}] ┃ ${message} ┃ ${formatMetadata(metadata)}`
    );
  },
  
  info(message: string, params: InfoLogParams): void {
    const timestamp = new Date().toISOString();
    const { filename, context, operation, metrics, data } = params;
    
    // Prepare metadata
    const metadata: Record<string, any> = {
      operation: {
        name: operation.name,
        status: operation.status
      }
    };
    
    if (operation.result) metadata.operation.result = operation.result;
    if (metrics) metadata.metrics = metrics;
    if (data) metadata.data = data;
    
    console.info(
      `${timestamp} ┃ [INFO] ┃ [${context}] ┃ [${filename}] ┃ ${message} ┃ ${formatMetadata(metadata)}`
    );
  },
  
  debug(message: string, params: DebugLogParams): void {
    const timestamp = new Date().toISOString();
    const { filename, context, technical, trace, data } = params;
    
    // Prepare metadata
    const metadata: Record<string, any> = {
      technical
    };
    
    if (trace) metadata.trace = trace;
    if (data) metadata.data = data;
    
    console.debug(
      `${timestamp} ┃ [DEBUG] ┃ [${context}] ┃ [${filename}] ┃ ${message} ┃ ${formatMetadata(metadata)}`
    );
  }
}; 