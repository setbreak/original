/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */

// Note: Properties and methods beginning with underbar ("_") are considered private and subject to change in future Dashcode releases.

function LevelIndicator(levelIndicator, value, minValue, maxValue, onValue, warningValue, criticalValue, spacing, stacked, interactive, continuous, imageOff, imageOn, imageWarning, imageCritical, imageWidth, imageHeight, onchanged)
{
}

LevelIndicator.prototype.remove = function()
{
	var parent = this._track.parentNode;
	parent.removeChild(this._track);
}

/*
 * refresh() member function
 * Refresh the current level indicator position.
 * Call this to make the level indicator appear after the widget has loaded and 
 * the LevelIndicator object has been instantiated.
 */
LevelIndicator.prototype.refresh = function()
{	
    var styleElement = this._levelIndicator;
    if (this._originalID) {
        styleElement = document.getElementById(this._originalID);
    }
    
	this._computedLevelIndicatorStyle = document.defaultView.getComputedStyle(styleElement, '');
	this._setValueTo(this.value);
}

LevelIndicator.prototype.setValue = function(newValue)
{
	this.value = newValue;
	this.refresh();
}

LevelIndicator.prototype.setMinValue = function(newValue)
{
	this.minValue = newValue;
	this.refresh();
}

LevelIndicator.prototype.setMaxValue = function(newValue)
{
	this.maxValue = newValue;
	this.refresh();
}

LevelIndicator.prototype.setOnValue = function(newValue)
{
	this.onValue = newValue;
	this.refresh();
}

LevelIndicator.prototype.setWarningValue = function(newValue)
{
	this.warningValue = newValue;
	this.refresh();
}

LevelIndicator.prototype.setCriticalValue = function(newValue)
{
	this.criticalValue = newValue;
	this.refresh();
}

LevelIndicator.prototype.setSpacing = function(newValue)
{
	this.spacing = newValue;
	this.refresh();
}

LevelIndicator.prototype.setStacked = function(newValue)
{
	this.stacked = newValue;
	this.refresh();
}

LevelIndicator.prototype.setInteractive = function(newValue)
{
	this.interactive = newValue;

	document.removeEventListener("mousedown", this._mousedownTrackHandler, true);

	if (this.interactive)
	{
		this._track.addEventListener("mousedown", this._mousedownTrackHandler, true);
		this._track.style.appleDashboardRegion = "dashboard-region(control rectangle)";
	}
	else
	{
		this._track.style.appleDashboardRegion = "none";
	}
		
	this.refresh();
}

LevelIndicator.prototype.setImageOff = function(newValue)
{
	this.imageOffPath = newValue;	
	this.refresh();
}

LevelIndicator.prototype.setImageOn = function(newValue)
{
	this.imageOnPath = newValue;	
	this.refresh();
}

LevelIndicator.prototype.setImageWarning = function(newValue)
{
	this.imageWarningPath = newValue;	
	this.refresh();
}

LevelIndicator.prototype.setImageCritical = function(newValue)
{
	this.imageCriticalPath = newValue;	
	this.refresh();
}

LevelIndicator.prototype.setImageWidth = function(newValue)
{
	this.imageWidth = newValue;	
	this.refresh();
}

LevelIndicator.prototype.setImageHeight = function(newValue)
{
	this.imageHeight = newValue;	
	this.refresh();
}

LevelIndicator.prototype._init = function(value, minValue, maxValue, onValue, warningValue, criticalValue, spacing, stacked, interactive, imageOff, imageOn, imageWarning, imageCritical, imageWidth, imageHeight)
{
	// For JavaScript event handlers
	var _self = this;
	
	this.minValue = minValue;
	this.maxValue = maxValue;
    this.onValue = onValue;
	this.warningValue = warningValue;
	this.criticalValue = criticalValue;
	this.spacing = spacing;
	this.stacked = stacked;
	this.interactive = interactive;
    
	this._captureEventHandler = function(event) { _self._captureEvent(event); };
	this._mousedownTrackHandler = function(event) { _self._mousedownTrack(event); };
	this._mousemoveTrackHandler = function(event) { _self._mousemoveTrack(event); };
	this._mouseupTrackHandler = function(event) { _self._mouseupTrack(event); };
	
	var style = null;
	var element = null;
    
    while (this._levelIndicator.firstChild) {
        this._levelIndicator.removeChild(this._levelIndicator.firstChild);
    }
    
    // Level Indicator Track
	element = document.createElement("div");
	style = element.style;
	style.appleDashboardRegion = "dashboard-region(control rectangle)";
	style.height = "100%";
	style.width = "100%";
	this._levelIndicator.appendChild(element);
	this._track = element;
    
	// Add event listeners
	if (this.interactive)
	{
		this._track.addEventListener("mousedown", this._mousedownTrackHandler, true);
	}
	
	this.refresh();
}

LevelIndicator.prototype._setValueTo = function(newValue)
{	
	this.value = newValue;
	
	// Remove the existing children
	var track = this._track;
	while (track.hasChildNodes())
		track.removeChild(track.firstChild);
	
	this._layoutElements();
    
	if (this.continuous && this.onchanged != null)
		this.onchanged(this.value);
}

// Capture events that we don't handle but also don't want getting through
LevelIndicator.prototype._captureEvent = function(event)
{
	event.stopPropagation();
	event.preventDefault();
}

LevelIndicator.prototype._mousedownTrack = function(event)
{	
	// temporary event listeners
	document.addEventListener("mousemove", this._mousemoveTrackHandler, true);
	document.addEventListener("mouseup", this._mouseupTrackHandler, true);
	document.addEventListener("mouseover", this._captureEventHandler, true);
	document.addEventListener("mouseout", this._captureEventHandler, true);
    
	this._setValueTo(this._computeValueFromMouseEvent(event));
} 

LevelIndicator.prototype._mousemoveTrack = function(event)
{	
	this._setValueTo(this._computeValueFromMouseEvent(event));
} 

LevelIndicator.prototype._mouseupTrack = function(event)
{	
	document.removeEventListener("mousemove", this._mousemoveTrackHandler, true);
	document.removeEventListener("mouseup", this._mouseupTrackHandler, true);
	document.removeEventListener("mouseover", this._captureEventHandler, true);
	document.removeEventListener("mouseout", this._captureEventHandler, true);
    
	// Fire our onchanged event now if they have discontinuous event firing
	if (!this.continuous && this.onchanged != null)
		this.onchanged(this.value);
} 

