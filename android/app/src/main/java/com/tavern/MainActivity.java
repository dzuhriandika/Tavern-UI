package com.tavern;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.core.PermissionListener; // <- add this import

public class MainActivity extends ReactActivity{
    private PermissionListener listener;
    /**
     * Returns the name of the main Tavern registered from JavaScript.
     * This is used to schedule rendering of the Tavern.
     */
    @Override
    protected String getMainComponentName() {
        return "Tavern";
    }

  public void setPermissionListener(PermissionListener listener)
  {
    this.listener = listener;
  }

  @Override
  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
  {
    if (listener != null)
    {
      listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  }
}
